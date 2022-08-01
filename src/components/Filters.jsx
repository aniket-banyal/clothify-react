import { Divider, Grid } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";


const filters = [<ColorFilter />, <SizeFilter />, <CategoryFilter />,]

const Filters = () => {
    return (
        <Grid
            container
            direction='column'
            rowSpacing={2}
            sx={{
                bgcolor: 'grey.900',
                borderRadius: 2,
                pb: 2,
                pr: 2,
            }}
        >
            {filters.map((filter, idx) =>
                <Grid item key={idx}>
                    {filter}
                    <Divider variant='middle' />
                </Grid>
            )}
        </Grid>
    );
}

export default Filters;