import { useQuery } from "@tanstack/react-query";
import api from "../../api";


const getSizes = async () => {
    const { data } = await api.get(
        "/clothes/sizes"
    )
    return data
}

export default function useSizes() {
    return useQuery([`sizes`], getSizes)
}
