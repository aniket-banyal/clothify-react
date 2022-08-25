import { useQuery } from "@tanstack/react-query"
import api from "../../api"
import { reactQueryConstants } from "../../constants"

const getSizes = async () => {
    const { data } = await api.get("/clothes/sizes")
    return data
}

export default function useSizes() {
    return useQuery([`sizes`], getSizes, {
        staleTime: reactQueryConstants.oneMinuteInMilliSeconds,
    })
}
