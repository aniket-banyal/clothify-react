import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";

export const useSelectedFilters = () => {
    return useContext(FiltersContext)
}
