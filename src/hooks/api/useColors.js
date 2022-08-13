import { useQuery } from "@tanstack/react-query";
import api from "../../api";


const getColors = async () => {
    const { data } = await api.get(
        "/clothes/colors"
    )
    return data
}


const oneMinute = 1000 * 60
const staleTime = 5 * oneMinute


export default function useColors() {
    return useQuery(
        [`colors`],
        getColors,
        { staleTime }
    )
}
