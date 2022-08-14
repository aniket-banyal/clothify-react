import { Stack } from "@mui/material";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Collapsible from "./Collapsible";
import ColorFilter from "./ColorFilter";
import CustomScrollbar from "./CustomScrollbar";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";


const height = 250


const Filters = () => {
    const filters = [
        { name: 'Category', component: CategoryFilter },
        { name: 'Color', component: ColorFilter },
        { name: 'Size', component: SizeFilter },
        { name: 'Price', component: PriceFilter },
    ]

    const [expandedName, setExpandedName] = useState(filters[0].name)


    return (
        <Stack
            spacing={1}
            sx={{
                bgcolor: 'grey.900',
                borderRadius: 2,
                py: 1,
            }}
        >
            {filters.map((filter, idx) =>
                <Collapsible
                    key={idx}
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
                            {...filter.props}
                        />
                    </CustomScrollbar>
                </Collapsible>
            )}
        </Stack>
    );
}

export default Filters;
