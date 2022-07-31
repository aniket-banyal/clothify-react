import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const getCategories = async () => {
    const { data } = await api.get(
        "/clothes/categories"
    )
    return data
}

export default function useCategories() {
    return useQuery(['categories'], getCategories)
}
