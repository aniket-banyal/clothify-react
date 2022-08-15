import { Grid } from "@mui/material";
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/api/useCategories";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import SelectedFilter from "./SelectedFilter";


const AnimatedGridItem = ({ children }) => {
    return (
        <Grid
            item
            component={motion.div}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </Grid>
    );
}


const SelectedFilters = () => {
    const { selectedCategories, setSelectedCategories,
        selectedColors, setSelectedColors,
        selectedSizes, setSelectedSizes,
        selectedPriceRange, setSelectedPriceRange } = useSelectedFilters()

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

    const handlePriceChange = () => {
        setSelectedPriceRange('')
    }


    return (
        <>
            <AnimatePresence>
                {
                    (
                        selectedCategories.length > 0 ||
                        selectedColors.length > 0 ||
                        selectedSizes.length > 0 ||
                        selectedPriceRange !== ''
                    )
                    &&
                    <LayoutGroup>
                        <Grid
                            container
                            rowGap={1}
                            columnGap={1}
                            sx={{
                                py: 2,
                                px: 2,
                                bgcolor: 'grey.900',
                                borderRadius: 2,
                                overflowY: 'hidden', // Need so that new SelectedFilter doesn't show up outside the container
                            }}
                            component={motion.div}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        >
                            <AnimatePresence>
                                {selectedCategories.map(id => {
                                    const category = categories.find(category => category.id === id)

                                    return (
                                        <AnimatedGridItem key={id}>
                                            <SelectedFilter
                                                name={gender ? category.name : `${category.name} (${category.gender})`}
                                                value={id}
                                                filterName={'category'}
                                                handleValueChange={handleCategoryChange}
                                            />
                                        </AnimatedGridItem>
                                    )
                                })}
                            </AnimatePresence>

                            <AnimatePresence>
                                {selectedColors.map(color =>
                                    <AnimatedGridItem key={color}>
                                        <SelectedFilter
                                            name={color}
                                            value={color}
                                            filterName={'color'}
                                            handleValueChange={handleColorChange}
                                        />
                                    </AnimatedGridItem>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {selectedSizes.map(size =>
                                    <AnimatedGridItem key={size}>
                                        <SelectedFilter
                                            name={size}
                                            value={size}
                                            filterName={'size'}
                                            handleValueChange={handleSizeChange}
                                        />
                                    </AnimatedGridItem>
                                )}
                            </AnimatePresence>

                            {
                                selectedPriceRange !== '' &&
                                <AnimatePresence>
                                    <AnimatedGridItem>
                                        <SelectedFilter
                                            name={selectedPriceRange}
                                            value={selectedPriceRange}
                                            filterName={'priceRange'}
                                            handleValueChange={handlePriceChange}
                                            nameFormat={(value) => `₹${value[0]} - ₹${value[1]}`}
                                        />
                                    </AnimatedGridItem>
                                </AnimatePresence>
                            }
                        </Grid>
                    </LayoutGroup>
                }
            </AnimatePresence>
        </>
    );
}

export default SelectedFilters;
