import { Grid } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from "react-router-dom";
import useMeasure from "react-use-measure";
import useCategories from "../hooks/api/useCategories";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import CustomScrollbar from "./CustomScrollbar";
import SelectedFilter from "./SelectedFilter";


const paddingY = 2
const height = 180
const trasitionDuration = 0.2


const AnimatedGridItem = ({ children }) => {
    return (
        <Grid
            item
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: trasitionDuration, }}
        >
            {children}
        </Grid>
    );
}


const SelectedFilters = ({ minPrice, maxPrice }) => {
    const { selectedCategories, setSelectedCategories,
        selectedColors, setSelectedColors,
        selectedSizes, setSelectedSizes,
        selectedPriceRange, setSelectedPriceRange } = useSelectedFilters()

    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')
    const { data: categories } = useCategories(gender)

    const [ref, bounds] = useMeasure({ debounce: 1 })

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
        setSelectedPriceRange([minPrice, maxPrice])
    }


    return (
        <>
            <AnimatePresence>
                {
                    (
                        selectedCategories.length > 0 ||
                        selectedColors.length > 0 ||
                        selectedSizes.length > 0 ||
                        selectedPriceRange[0] !== minPrice ||
                        selectedPriceRange[1] !== maxPrice
                    )
                    &&
                    <Grid
                        container
                        sx={{
                            py: paddingY,
                            px: 2,
                            bgcolor: 'grey.900',
                            borderRadius: 2,
                            overflowY: 'hidden',
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ height: Math.min(height, bounds.height) + paddingY * 14, opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: trasitionDuration, }}
                    >
                        <CustomScrollbar height={height}>
                            <Grid
                                item
                                container
                                rowGap={1}
                                columnGap={1}
                                ref={ref}
                                sx={{
                                    py: 1,
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

                                <AnimatePresence>
                                    <AnimatedGridItem>
                                        <SelectedFilter
                                            name={selectedPriceRange}
                                            value={selectedPriceRange}
                                            filterName={'price'}
                                            handleValueChange={handlePriceChange}
                                            nameFormat={(value) => `₹${value[0]} - ₹${value[1]}`}
                                        />
                                    </AnimatedGridItem>
                                </AnimatePresence>
                            </Grid>
                        </CustomScrollbar>
                    </Grid>
                }
            </AnimatePresence>
        </>
    );
}

export default SelectedFilters;
