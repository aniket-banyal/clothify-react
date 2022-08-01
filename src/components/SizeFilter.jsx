import { Box, Typography } from "@mui/material";
import useSizes from "../hooks/api/useSizes";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import CustomScrollbar from "./CustomScrollbar";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import Collapsible from "./Collapsible";


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
        <Collapsible title={'Size'}>
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
                                            checked={state.size}
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
        </Collapsible>
    );
}

export default SizeFilter;
