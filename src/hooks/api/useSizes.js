import { useQuery } from "@tanstack/react-query";
import api from "../../api";


const getSizes = async () => {
    const { data } = await api.get(
        "/clothes/sizes"
    )
    return data
}


const oneMinute = 1000 * 60
const staleTime = 5 * oneMinute


export default function useSizes() {
    return useQuery(
        [`sizes`],
        getSizes,
        { staleTime }
    )
}
