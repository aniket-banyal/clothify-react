import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const getClothes = async () => {
    const { data } = await api.get(
        "/clothes"
    )
    return data
}

export default function useClothes() {
    return useQuery(['clothes'], getClothes)
}
