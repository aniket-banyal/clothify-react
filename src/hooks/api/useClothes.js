import { useQuery } from "@tanstack/react-query";
import api from "../../api";

export const getClothes = async ({ gender, colors, sizes }) => {
    if (!gender)
        gender = ''
    if (!colors)
        colors = []
    if (!sizes)
        sizes = []

    const searchParams = new URLSearchParams({ gender, color: colors, size: sizes })
    const { data } = await api.get(
        "/clothes/",
        { params: searchParams }
    )
    return data
}

export default function useClothes({ gender, colors, sizes }, suspense = true) {

    // Sorting so that queryKey remains same even if order of colors and sort changes
    colors?.sort()
    sizes?.sort()

    return useQuery(
        [`clothes ${gender} ${colors} ${sizes}`],
        () => getClothes({ gender, colors, sizes }),
        { suspense }
    )
}
