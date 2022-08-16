import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import { clothKeys } from "./useClothes";


export const getCloth = async ({ clothId }) => {
    const { data } = await api.get(
        `/clothes/${clothId}`,
    )
    return data
}

export default function useCloth({ clothId, suspense = true }) {
    return useQuery(
        clothKeys.detail(clothId),
        () => getCloth({ clothId }),
        { suspense }
    )
}
