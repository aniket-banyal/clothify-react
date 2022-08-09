import { Grid } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import { useState } from "react";
import Collapsible from "./Collapsible";
import CustomScrollbar from "./CustomScrollbar";


const filters = [
    { name: 'Category', component: CategoryFilter },
    { name: 'Color', component: ColorFilter },
    { name: 'Size', component: SizeFilter }

]

const height = 250

const Filters = () => {
    const [expandedName, setExpandedName] = useState('')
    return (
        <Grid
            container
            direction='column'
            columnGap={2}
            rowGap={1}
            sx={{
                bgcolor: 'grey.900',
                borderRadius: 2,
                px: 3,
                py: 1,
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
        </Grid>
    );
}

export default Filters;
