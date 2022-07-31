import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const getClothes = async (gender) => {
    const searchParams = new URLSearchParams({ gender })
    const { data } = await api.get(
        "/clothes",
        { params: searchParams }
    )
    return data
}

export default function useClothes(gender) {
    return useQuery([`clothes ${gender}`], () => getClothes(gender))
}
