import { Box, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import useColors from "../hooks/api/useColors";
import { useClothesPrefetch } from "../hooks/useClothesPrefetch";
import { useSelectedFilters } from '../hooks/useSelectedFilters';


const ColorFilter = () => {
    const { data: colors } = useColors()
    const { selectedColors, setSelectedColors } = useSelectedFilters()
    const { prefetchClothes } = useClothesPrefetch()

    const handleChange = (event) => {
        if (event.target.checked)
            setSelectedColors([...selectedColors, event.target.name])
        else
            setSelectedColors(selectedColors.filter(color => color !== event.target.name))
    }


    return (
        <Box
            sx={{
                display: 'flex',
            }}>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    {colors.map(color =>
                        <FormControlLabel
                            key={color}
                            label={<Typography variant="body2" color="text.secondary">{color}</Typography>}
                            control={
                                <Checkbox
                                    sx={{ color: color }}
                                    checked={selectedColors.includes(color)}
                                    onChange={handleChange}
                                    name={color}
                                />
                            }
                            onMouseEnter={() => prefetchClothes({ color })}
                        />
                    )}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default ColorFilter;
