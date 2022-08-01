import { useQuery } from "@tanstack/react-query";
import api from "../../api";

export const getClothes = async ({ gender, colors }) => {
    if (!gender)
        gender = ''
    if (!colors)
        colors = ''

    const searchParams = new URLSearchParams({ gender, color: colors })
    const { data } = await api.get(
        "/clothes/",
        { params: searchParams }
    )
    return data
}

export default function useClothes({ gender, colors }, suspense = true) {
    return useQuery(
        [`clothes ${gender} ${colors}`],
        () => getClothes({ gender, colors }),
        { suspense }
    )
}
