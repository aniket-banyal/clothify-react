import { Box } from "@mui/material";
import useSizes from "../hooks/api/useSizes";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import CustomScrollbar from "./CustomScrollbar";
import { useSelectedFilters } from "../hooks/useSelectedFilters";


const height = 250

const SizeFilter = () => {
    const { data: sizes } = useSizes()

    const initialState = {}
    sizes.forEach(size => initialState[size] = false)
    const [state, setState] = useState(initialState)

    const { selectedSizes, setSelectedSizes } = useSelectedFilters()

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        })

        if (event.target.checked)
            setSelectedSizes([...selectedSizes, event.target.name])
        else
            setSelectedSizes(selectedSizes.filter(size => size !== event.target.name))
    }


    return (
        <CustomScrollbar height={height}>
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                }}>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Size</FormLabel>
                    <FormGroup>
                        {sizes.map(size =>
                            <FormControlLabel
                                key={size}
                                control={<Checkbox sx={{ size: size }} checked={state.size} onChange={handleChange} name={size} />}
                                label={size}
                            />
                        )}
                    </FormGroup>
                </FormControl>
            </Box>
        </CustomScrollbar>
    );
}

export default SizeFilter;
