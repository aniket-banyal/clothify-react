import { Divider, Grid } from "@mui/material";
import ColorFilter from "./ColorFilter";

const Filters = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={2}
            sx={{
                bgcolor: 'grey.900',
                borderRadius: 2,
                pb: 2,
                pr: 2,
            }}
        >
            <Grid item>
                <ColorFilter />
            </Grid>

            <Divider variant='middle' />
        </Grid>
    );
}

export default Filters;