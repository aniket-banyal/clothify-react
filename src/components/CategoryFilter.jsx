import { Box, Typography } from "@mui/material";
import useCategories from "../hooks/api/useCategories";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { useSelectedFilters } from '../hooks/useSelectedFilters'
import CustomScrollbar from "./CustomScrollbar";
import { useSearchParams } from 'react-router-dom'
import Collapsible from "./Collapsible";


const CategoryFilter = ({ expanded, toggleExpanded, height }) => {
    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')
    const { data: categories } = useCategories(gender)

    const initialState = {}
    categories.forEach(category => initialState[category.id] = false)
    const [state, setState] = useState(initialState)

    const { selectedCategories, setSelectedCategories } = useSelectedFilters()

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.value]: event.target.checked,
        })

        if (event.target.checked)
            setSelectedCategories([...selectedCategories, event.target.value])
        else
            setSelectedCategories(selectedCategories.filter(category => category !== event.target.value))
    }


    return (
        <Collapsible
            title={'Category'}
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
                            {categories.map(category =>
                                <FormControlLabel
                                    key={category.id}
                                    label={
                                        <Typography variant="body2" color="text.secondary">
                                            {gender ? category.name : `${category.name} (${category.gender})`}
                                        </Typography>
                                    }
                                    control={
                                        <Checkbox
                                            checked={state.category}
                                            onChange={handleChange}
                                            value={category.id}
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

export default CategoryFilter;
