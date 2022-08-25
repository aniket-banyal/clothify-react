import { useQuery } from "@tanstack/react-query"
import api from "../../api"
import { reactQueryConstants } from "../../constants"

const getPriceRange = async () => {
    const { data } = await api.get("/clothes/price-range")
    return data
}

export default function usePriceRange() {
    return useQuery([`clothes price-range`], getPriceRange, {
        staleTime: reactQueryConstants.oneMinuteInMilliSeconds,
    })
}
