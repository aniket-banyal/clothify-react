import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import ClearIcon from '@mui/icons-material/Clear';
import { AnimatePresence, motion } from 'framer-motion'
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/api/useCategories";


const SelectedFilters = () => {
    const { selectedCategories, setSelectedCategories, selectedColors, setSelectedColors, selectedSizes, } = useSelectedFilters()

    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')
    const { data: categories } = useCategories(gender)


    const handleColorChange = (clearedColor) => {
        setSelectedColors(selectedColors.filter(color => color !== clearedColor))
    }

    const handleCategoryChange = (clearedCategory) => {
        setSelectedCategories(selectedCategories.filter(category => category !== clearedCategory))
    }

    return (
        <>
            {
                (selectedCategories.length > 0 || selectedColors.length > 0 || selectedSizes.length > 0) &&
                <Grid
                    container
                    columnSpacing={2}
                    rowGap={1}
                    sx={{
                        bgcolor: 'grey.900',
                        borderRadius: 2,
                        px: 1,
                        py: 2,
                    }}
                >
                    <AnimatePresence>
                        {selectedCategories.map(id => {
                            const category = categories.find(category => category.id === id)

                            return (
                                <Grid
                                    item
                                    key={id}
                                    component={motion.div}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, }}
                                >
                                    <Stack
                                        direction='row'
                                        alignItems={'center'}
                                        sx={{
                                            px: 1.5,
                                            py: 0.1,
                                            border: 1,
                                            borderRadius: 5,
                                            borderColor: 'grey.600',
                                            transition: "border 0.2s",
                                            ":hover": {
                                                borderColor: 'grey.400',
                                            },
                                        }}
                                    >
                                        <Typography variant="body2">
                                            {gender ? category.name : `${category.name} (${category.gender})`}
                                        </Typography>

                                        <IconButton
                                            disableRipple
                                            size="small"
                                            color="inherit"
                                            edge='end'
                                            onClick={() => handleCategoryChange(id)}
                                        >
                                            <ClearIcon
                                                fontSize='16px'
                                            />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            )
                        }
                        )}

                        {selectedColors.map(color =>
                            <Grid
                                item
                                key={color}
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, }}
                            >
                                <Stack
                                    direction='row'
                                    alignItems={'center'}
                                    sx={{
                                        px: 1.5,
                                        py: 0.1,
                                        border: 1,
                                        borderRadius: 5,
                                        borderColor: 'grey.600',
                                        transition: "border 0.2s",
                                        ":hover": {
                                            borderColor: 'grey.400',
                                        },
                                    }}
                                >
                                    <Typography variant="body2">
                                        {color}
                                    </Typography>

                                    <IconButton
                                        disableRipple
                                        size="small"
                                        color="inherit"
                                        edge='end'
                                        onClick={() => handleColorChange(color)}
                                    >
                                        <ClearIcon
                                            fontSize='16px'
                                        />
                                    </IconButton>
                                </Stack>
                            </Grid>
                        )}
                    </AnimatePresence>
                </Grid>
            }
        </>
    );
}

export default SelectedFilters;
