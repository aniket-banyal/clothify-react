import { Box, Typography } from "@mui/material";
import useColors from "../hooks/api/useColors";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelectedFilters } from '../hooks/useSelectedFilters'


const ColorFilter = () => {
    const { data: colors } = useColors()
    const { selectedColors, setSelectedColors } = useSelectedFilters()


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
                        />
                    )}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default ColorFilter;
