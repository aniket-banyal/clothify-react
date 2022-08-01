import { useQuery } from "@tanstack/react-query";
import api from "../../api";

export const getClothes = async ({ gender, colors, sizes, categories }) => {
    if (!gender)
        gender = ''
    if (!colors)
        colors = []
    if (!sizes)
        sizes = []
    if (!categories)
        categories = []

    const searchParams = new URLSearchParams({ gender, color: colors, size: sizes, category: categories })
    const { data } = await api.get(
        "/clothes/",
        { params: searchParams }
    )
    return data
}

export default function useClothes({ gender, colors, sizes, categories }, suspense = true) {

    // Sorting so that queryKey remains same even if order of colors and sort changes
    colors?.sort()
    sizes?.sort()
    categories?.sort()

    return useQuery(
        [`clothes ${gender} ${colors} ${sizes} ${categories}`],
        () => getClothes({ gender, colors, sizes, categories }),
        { suspense }
    )
}
