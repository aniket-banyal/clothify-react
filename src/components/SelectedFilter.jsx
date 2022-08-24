import { Chip } from "@mui/material";
import { useClothesPrefetch } from '../hooks/useClothesPrefetch';


const SelectedFilter = ({ name, value, filterName, handleValueChange, nameFormat }) => {
    const { prefetchClothes } = useClothesPrefetch()


    return (
        <Chip
            label={nameFormat ? nameFormat(name) : name}
            variant="outlined"
            onDelete={() => handleValueChange(value)}
            onMouseEnter={() => {
                // For Color, Cateogry and Size Filter, value will be string or number, and it would already be in array and thus will be removed in prefetchClothes
                if (typeof value === 'string' || typeof value === 'number')
                    prefetchClothes({ [filterName]: value })

                // For PriceFilter value will be an arr [min, max], so that to remove it in prefetchClothes, set it to ''
                else
                    prefetchClothes({ [filterName]: '' })
            }}
        />
    );
}

export default SelectedFilter;
