import { Box, useTheme } from "@mui/material";
import useColors from "../hooks/api/useColors";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { useSelectedColors } from '../hooks/useSelectedColors'
import CustomScrollbar from "./CustomScrollbar";


const height = 300

const ColorFilter = () => {
    const { data: colors } = useColors()

    const initialState = {}
    colors.forEach(color => initialState[color] = false)
    const [state, setState] = useState(initialState)

    const { selectedColors, setSelectedColors } = useSelectedColors()

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        })

        if (event.target.checked)
            setSelectedColors([...selectedColors, event.target.name])
        else
            setSelectedColors(selectedColors.filter(color => color !== event.target.name))
    }


    return (
        <CustomScrollbar height={height}>
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                }}>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Colors</FormLabel>
                    <FormGroup>
                        {colors.map(color =>
                            <FormControlLabel
                                key={color}
                                control={<Checkbox checked={state.color} onChange={handleChange} name={color} />}
                                label={color}
                            />
                        )}
                    </FormGroup>
                </FormControl>
            </Box>
        </CustomScrollbar>
    );
}

export default ColorFilter;
