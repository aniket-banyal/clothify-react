import { Box, Divider, Grid } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import { useState } from "react";
import SelectedFilters from "./SelectedFilters";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import { AnimatePresence, motion } from "framer-motion";
import Collapsible from "./Collapsible";
import CustomScrollbar from "./CustomScrollbar";


const filters = [
    { name: 'Category', component: CategoryFilter },
    { name: 'Color', component: ColorFilter },
    { name: 'Size', component: SizeFilter }

]

const height = 300

const Filters = () => {
    const [expandedName, setExpandedName] = useState('')

    const { selectedColors, selectedSizes, selectedCategories } = useSelectedFilters()

    return (
        <Grid
            container
            direction='column'
            columnSpacing={2}
            rowGap={1}
            sx={{
                bgcolor: 'grey.900',
                borderRadius: 2,
                px: 1,
                py: 2,
                position: 'sticky',
                top: 100,
            }}
        >
            {filters.map((filter, idx) =>
                <Grid item key={idx}>
                    <Collapsible
                        title={filter.name}
                        expanded={expandedName === filter.name}
                        toggleExpanded={
                            expandedName === filter.name ?
                                () => setExpandedName('')
                                :
                                () => setExpandedName(filter.name)
                        }
                    >
                        <CustomScrollbar height={height}>
                            <filter.component
                                height={height}
                            />
                        </CustomScrollbar>
                    </Collapsible>
                </Grid>
            )}

            <AnimatePresence>
                {
                    (selectedCategories.length > 0 || selectedColors.length > 0 || selectedSizes.length > 0) &&
                    <Grid item>
                        <Divider
                            sx={{ mb: 1 }}
                            component={motion.hr}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    </Grid>
                }
            </AnimatePresence>

            <Grid item>
                <SelectedFilters />
            </Grid>
        </Grid>
    );
}

export default Filters;
