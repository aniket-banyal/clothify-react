import { useQuery } from "@tanstack/react-query";
import api from "../../api";


export const getCloth = async ({ clothId }) => {
    const { data } = await api.get(
        `/clothes/${clothId}`,
    )
    return data
}

export default function useCloth({ clothId, suspense = true }) {
    return useQuery(
        [`clothes ${clothId}`],
        () => getCloth({ clothId }),
        { suspense }
    )
}
