import { Grid } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";


const filters = [<CategoryFilter />, <ColorFilter />, <SizeFilter />,]

const Filters = () => {
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
                px: 1
            }}
        >
            {filters.map((filter, idx) =>
                <Grid item key={idx}>
                    {filter}
                </Grid>
            )}
        </Grid>
    );
}

export default Filters;
