import { Box, Typography } from "@mui/material";
import useSizes from "../hooks/api/useSizes";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomScrollbar from "./CustomScrollbar";
import { useSelectedFilters } from "../hooks/useSelectedFilters";


const SizeFilter = ({ expanded, toggleExpanded, height }) => {
    const { data: sizes } = useSizes()
    const { selectedSizes, setSelectedSizes } = useSelectedFilters()

    const handleChange = (event) => {
        const name = event.target.name
        if (event.target.checked)
            setSelectedSizes([...selectedSizes, name])
        else
            setSelectedSizes(selectedSizes.filter(size => size !== name))
    }


    return (
        <CustomScrollbar height={height}>
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
                            />
                        )}
                    </FormGroup>
                </FormControl>
            </Box>
        </CustomScrollbar>
    );
}

export default SizeFilter;
