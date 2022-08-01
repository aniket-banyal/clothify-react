import { Grid } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import { useState } from "react";


const filters = [
    { name: 'category', component: CategoryFilter },
    { name: 'color', component: ColorFilter },
    { name: 'size', component: SizeFilter }

]

const height = 300

const Filters = () => {
    const [expandedName, setExpandedName] = useState('')

    return (
        <Grid
            container
            direction='column'
            columnSpacing={2}
            rowGap={1}
            sx={{
                bgcolor: 'grey.900',
                borderRadius: 2,
                py: 1,
                px: 1,
                position: 'sticky',
                top: 100,
            }}
        >

            {filters.map((filter, idx) =>
                <Grid item key={idx}>
                    <filter.component
                        height={height}
                        expanded={expandedName === filter.name}
                        toggleExpanded={
                            expandedName === filter.name ?
                                () => setExpandedName('')
                                :
                                () => setExpandedName(filter.name)
                        }
                    />
                </Grid>
            )}
        </Grid>
    );
}

export default Filters;
