import { useQuery } from "@tanstack/react-query";
import api from "../../api";


const getCategories = async (gender) => {
    if (!gender)
        gender = ''

    const searchParams = new URLSearchParams({ gender })

    const { data } = await api.get(
        "/clothes/categories",
        { params: searchParams }
    )
    return data
}

export default function useCategories(gender) {
    return useQuery(
        [`categories ${gender}`],
        () => getCategories(gender),
        { suspense: true })
}
