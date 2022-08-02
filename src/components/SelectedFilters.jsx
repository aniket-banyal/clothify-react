import { Grid } from "@mui/material";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/api/useCategories";
import SelectedFilter from "./SelectedFilter";


const SelectedFilters = () => {
    const { selectedCategories, setSelectedCategories,
        selectedColors, setSelectedColors,
        selectedSizes, setSelectedSizes } = useSelectedFilters()

    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')
    const { data: categories } = useCategories(gender)


    const handleColorChange = (clearedColor) => {
        setSelectedColors(selectedColors.filter(color => color !== clearedColor))
    }

    const handleCategoryChange = (clearedCategory) => {
        setSelectedCategories(selectedCategories.filter(category => category !== clearedCategory))
    }

    const handleSizeChange = (clearedSize) => {
        setSelectedSizes(selectedSizes.filter(size => size !== clearedSize))
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
                                <SelectedFilter
                                    key={id}
                                    name={gender ? category.name : `${category.name} (${category.gender})`}
                                    value={id}
                                    handleValueChange={handleCategoryChange}
                                />
                            )
                        })}

                        {selectedColors.map(color =>
                            <SelectedFilter
                                key={color}
                                name={color}
                                value={color}
                                handleValueChange={handleColorChange}
                            />
                        )}

                        {selectedSizes.map(size =>
                            <SelectedFilter
                                key={size}
                                name={size}
                                value={size}
                                handleValueChange={handleSizeChange}
                            />
                        )}
                    </AnimatePresence>
                </Grid>
            }
        </>
    );
}

export default SelectedFilters;
