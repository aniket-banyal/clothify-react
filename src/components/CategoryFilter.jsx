import { Box, Stack, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useSearchParams } from 'react-router-dom';
import useCategories from "../hooks/api/useCategories";
import { useClothesPrefetch } from '../hooks/useClothesPrefetch';
import { useSelectedFilters } from '../hooks/useSelectedFilters';


const CategoryFilter = () => {
    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')
    const { data: categories } = useCategories(gender)

    const { selectedCategories, setSelectedCategories } = useSelectedFilters()
    const { prefetchClothes } = useClothesPrefetch()

    const handleChange = (event) => {
        const categoryId = parseInt(event.target.value)
        if (event.target.checked)
            setSelectedCategories([...selectedCategories, categoryId])
        else
            setSelectedCategories(selectedCategories.filter(category => category !== categoryId))
    }


    return (
        <Box
            sx={{
                display: 'flex',
                ml: 2,
            }}>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    {categories.map(({ id, name, gender: clothGender, count }) =>
                        <Stack
                            key={id}
                            direction={'row'}
                            alignItems={'center'}
                        >
                            <FormControlLabel
                                label={
                                    <Typography variant="body2" color="text.secondary">
                                        {gender ? name : `${name} (${clothGender})`}
                                    </Typography>
                                }
                                control={
                                    <Checkbox
                                        checked={selectedCategories.includes(id)}
                                        onChange={handleChange}
                                        value={id}
                                    />
                                }
                                onMouseEnter={() => prefetchClothes({ category: id })}
                            />
                            <Typography
                                color={'grey.500'}
                                variant={'body2'}
                            >
                                ({count})
                            </Typography>
                        </Stack>
                    )}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CategoryFilter;
