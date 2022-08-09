import { Box, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import useSizes from "../hooks/api/useSizes";
import { useClothesPrefetch } from "../hooks/useClothesPrefetch";
import { useSelectedFilters } from "../hooks/useSelectedFilters";


const SizeFilter = () => {
    const { data: sizes } = useSizes()
    const { selectedSizes, setSelectedSizes } = useSelectedFilters()
    const { prefetchClothes } = useClothesPrefetch()

    const handleChange = (event) => {
        const name = event.target.name
        if (event.target.checked)
            setSelectedSizes([...selectedSizes, name])
        else
            setSelectedSizes(selectedSizes.filter(size => size !== name))
    }


    return (
        <Box
            sx={{
                display: 'flex',
            }}>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    {sizes.map(size =>
                        <FormControlLabel
                            key={size}
                            label={<Typography variant="body2" color="text.secondary">{size}</Typography>}
                            control={
                                <Checkbox
                                    checked={selectedSizes.includes(size)}
                                    onChange={handleChange}
                                    name={size}
                                />
                            }
                            onMouseEnter={() => prefetchClothes({ size })}
                        />
                    )}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default SizeFilter;
