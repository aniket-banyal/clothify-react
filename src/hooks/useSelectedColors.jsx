import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

export const useSelectedColors = () => {
    return useContext(ColorContext)
}
