import { Box } from "@mui/material";
import useCategories from "../hooks/api/useCategories";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { useSelectedFilters } from '../hooks/useSelectedFilters'
import CustomScrollbar from "./CustomScrollbar";
import { useSearchParams } from 'react-router-dom'

const height = 300

const CategoryFilter = () => {
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
        <CustomScrollbar height={height}>
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                }}>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Category</FormLabel>
                    <FormGroup>
                        {categories.map(category =>
                            <FormControlLabel
                                key={category.id}
                                control={<Checkbox checked={state.category} onChange={handleChange} value={category.id} />}
                                label={`${category.name} (${category.gender})`}
                            />
                        )}
                    </FormGroup>
                </FormControl>
            </Box>
        </CustomScrollbar>
    );
}

export default CategoryFilter;
