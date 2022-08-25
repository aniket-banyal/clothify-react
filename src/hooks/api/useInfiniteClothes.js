import { useInfiniteQuery } from "@tanstack/react-query";
import api from "../../api";
import { reactQueryConstants } from "../../constants";


const results_per_page = 15

export const infiniteClothKeys = {
    all: ['infiniteClothes'],
    lists: () => [...infiniteClothKeys.all, 'list'],
    list: ({
        gender = '',
        colors = [],
        sizes = [],
        categories = [],
        price = '',
    }) => {
        // Creating copy so that original array doesn't get modified, which causes UI issue in SelectedFilters
        colors = colors?.slice()
        sizes = sizes?.slice()
        categories = categories?.slice()
        // Sorting so that queryKey remains same even if order of colors and sort changes
        colors?.sort()
        sizes?.sort()
        categories?.sort()

        return ([
            ...infiniteClothKeys.lists(),
            { gender, colors, sizes, categories, price }
        ])
    }
}

export const getPaginatedClothes = async ({ gender, colors, sizes, categories, price, page = 1 }) => {
    if (!gender)
        gender = ''
    if (!colors)
        colors = []
    if (!sizes)
        sizes = []
    if (!categories)
        categories = []
    if (!price)
        price = []

    const searchParams = new URLSearchParams({
        gender,
        color: colors,
        size: sizes,
        category: categories,
        sell_price: price,
        page,
        limit: results_per_page
    })
    const { data } = await api.get(
        "/clothes/",
        { params: searchParams }
    )
    return data
}

export const useInfiniteClothes = ({ gender, colors, sizes, categories, price, suspense = true }) => {
    return useInfiniteQuery(
        infiniteClothKeys.list({ gender, colors, sizes, categories, price }),
        ({ pageParam: page }) => getPaginatedClothes({ gender, colors, sizes, categories, price, page }),
        {
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined
            },
            select: (data) => ({ ...data, pages: data.pages.flatMap(page => page.results) }),
            suspense,
            keepPreviousData: true,
            staleTime: reactQueryConstants.useInfiniteClothes.staleTime,
        }
    )
}

