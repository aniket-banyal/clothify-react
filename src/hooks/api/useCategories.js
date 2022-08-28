import { useQuery } from "@tanstack/react-query"
import api from "../../api"
import { reactQueryConstants } from "../../constants"

export const categoryKeys = {
    all: ["categories"],
    lists: () => [...categoryKeys.all, "list"],
    list: ({ gender = "" }) => {
        return [...categoryKeys.lists(), { gender }]
    },
}

const getCategories = async (gender) => {
    if (!gender) gender = ""

    const searchParams = new URLSearchParams({ gender })

    const { data } = await api.get("/clothes/categories", {
        params: searchParams,
    })
    return data
}

export default function useCategories(gender) {
    return useQuery(
        categoryKeys.list({ gender }),
        () => getCategories(gender),
        {
            suspense: true,
            staleTime: reactQueryConstants.oneMinuteInMilliSeconds,
        }
    )
}
