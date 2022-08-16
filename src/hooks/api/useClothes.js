import { useQuery } from "@tanstack/react-query";
import api from "../../api";


export const clothKeys = {
    all: ['clothes'],
    lists: () => [...clothKeys.all, 'list'],
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
            ...clothKeys.lists(),
            { gender, colors, sizes, categories, price }
        ])
    },
    details: () => [...clothKeys.all, 'detail'],
    detail: (id) => [...clothKeys.details(), id],
}


export const getClothes = async ({ gender, colors, sizes, categories, price }) => {
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
    })
    const { data } = await api.get(
        "/clothes/",
        { params: searchParams }
    )
    return data
}


export default function useClothes({ gender, colors, sizes, categories, price }, queryOptions = {}) {
    const { suspense = true } = queryOptions

    return useQuery(
        clothKeys.list({ gender, colors, sizes, categories, price }),
        () => getClothes({ gender, colors, sizes, categories, price }),
        { suspense }
    )
}
