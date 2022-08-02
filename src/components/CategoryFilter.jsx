import { Box, Typography } from "@mui/material";
import useCategories from "../hooks/api/useCategories";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelectedFilters } from '../hooks/useSelectedFilters'
import CustomScrollbar from "./CustomScrollbar";
import { useSearchParams } from 'react-router-dom'


const CategoryFilter = ({ height }) => {
    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')
    const { data: categories } = useCategories(gender)

    const { selectedCategories, setSelectedCategories } = useSelectedFilters()

    const handleChange = (event) => {
        const categoryId = parseInt(event.target.value)
        if (event.target.checked)
            setSelectedCategories([...selectedCategories, categoryId])
        else
            setSelectedCategories(selectedCategories.filter(category => category !== categoryId))
    }


    return (
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
                                        checked={selectedCategories.includes(category.id)}
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
    );
}

export default CategoryFilter;
