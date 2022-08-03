import { Grid } from "@mui/material";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import { AnimatePresence, motion } from 'framer-motion'
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/api/useCategories";
import SelectedFilter from "./SelectedFilter";
import useMeasure from "react-use-measure";
import CustomScrollbar from "./CustomScrollbar";


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
            transition={{ duration: trasitionDuration * 1.2, }}
        >
            {children}
        </Grid>
    );
}


const SelectedFilters = () => {
    const { selectedCategories, setSelectedCategories,
        selectedColors, setSelectedColors,
        selectedSizes, setSelectedSizes } = useSelectedFilters()

    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')
    const { data: categories } = useCategories(gender)

    const [ref, bounds] = useMeasure()

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
                <AnimatePresence initial={false}>
                    <Grid
                        container
                        sx={{
                            py: paddingY,
                            px: 2,
                            bgcolor: 'grey.900',
                            borderRadius: 2,
                        }}
                        component={motion.div}
                        animate={{ height: Math.min(height, bounds.height) + paddingY * 14 }}
                        transition={{ duration: trasitionDuration }}
                    >
                        <CustomScrollbar height={height}>
                            <Grid
                                item
                                container
                                rowGap={1}
                                columnGap={1}
                                ref={ref}
                            >
                                {selectedCategories.map(id => {
                                    const category = categories.find(category => category.id === id)

                                    return (
                                        <AnimatedGridItem key={id}>
                                            <SelectedFilter
                                                name={gender ? category.name : `${category.name} (${category.gender})`}
                                                value={id}
                                                handleValueChange={handleCategoryChange}
                                            />
                                        </AnimatedGridItem>
                                    )
                                })}

                                {selectedColors.map(color =>
                                    <AnimatedGridItem key={color}>
                                        <SelectedFilter
                                            name={color}
                                            value={color}
                                            handleValueChange={handleColorChange}
                                        />
                                    </AnimatedGridItem>
                                )}

                                {selectedSizes.map(size =>
                                    <AnimatedGridItem key={size}>
                                        <SelectedFilter
                                            name={size}
                                            value={size}
                                            handleValueChange={handleSizeChange}
                                        />
                                    </AnimatedGridItem>
                                )}
                            </Grid>
                        </CustomScrollbar>
                    </Grid>
                </AnimatePresence>
            }
        </>
    );
}

export default SelectedFilters;
