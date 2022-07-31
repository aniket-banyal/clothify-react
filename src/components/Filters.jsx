import { Grid } from "@mui/material";
import ColorFilter from "./ColorFilter";

const Filters = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={2}
        >
            <Grid item>
                <ColorFilter />
            </Grid>
        </Grid>
    );
}

export default Filters;