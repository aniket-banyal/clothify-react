import { Box, Typography } from "@mui/material";
import useColors from "../hooks/api/useColors";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { useSelectedFilters } from '../hooks/useSelectedFilters'
import CustomScrollbar from "./CustomScrollbar";
import Collapsible from "./Collapsible";


const ColorFilter = ({ expanded, toggleExpanded, height }) => {
    const { data: colors } = useColors()

    const initialState = {}
    colors.forEach(color => initialState[color] = false)
    const [state, setState] = useState(initialState)

    const { selectedColors, setSelectedColors } = useSelectedFilters()

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
        <Collapsible
            title={'Color'}
            expanded={expanded}
            toggleExpanded={toggleExpanded}
        >
            <CustomScrollbar height={height}>
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
                                            checked={state.color}
                                            onChange={handleChange}
                                            name={color}
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

export default ColorFilter;
