import { useQuery } from "@tanstack/react-query";
import api from "../../api";


const getPriceRange = async () => {
    const { data } = await api.get(
        "/clothes/price-range"
    )
    return data
}


const oneMinute = 1000 * 60
const staleTime = 5 * oneMinute


export default function usePriceRange() {
    return useQuery(
        [`clothes price-range`],
        getPriceRange,
        { staleTime }
    )
}
