import useClothes from '../hooks/api/useClothes'
import { useGender } from "../hooks/useGender";
import ClothesGrid from "./ClothesGrid";


const ClothesList = () => {
    const { gender } = useGender()
    const { data: clothes } = useClothes({ gender })


    return (
        <ClothesGrid clothes={clothes} />
    );
}

export default ClothesList;