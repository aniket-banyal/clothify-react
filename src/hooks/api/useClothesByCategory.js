import { useQuery } from "@tanstack/react-query";
import api from "../../api";


export const getClothesByCategory = async (category) => {
    const searchParams = new URLSearchParams({ category })
    const { data } = await api.get(
        "/clothes/",
        { params: searchParams }
    )
    return data
}

export default function useClothesByCategory(category) {
    return useQuery([`clothes ${category}`], () => getClothesByCategory(category))
}
