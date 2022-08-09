import { useContext } from "react";
import { ClothesPrefetchContext } from "../context/ClothesPrefetchContext";

export const useClothesPrefetch = () => {
    return useContext(ClothesPrefetchContext)
}
