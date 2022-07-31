import { useContext } from "react";
import { GenderContext } from "../context/GenderContext";

export const useGender = () => {
    return useContext(GenderContext)
}
