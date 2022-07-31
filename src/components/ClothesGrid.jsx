import { Grid } from "@mui/material";
import Cloth from "./Cloth";

const ClothesGrid = ({ clothes }) => {
    return (
        <Grid
            container
            spacing={2}
        >
            {clothes.map(cloth =>
                <Grid item key={cloth.id}>
                    <Cloth cloth={cloth} />
                </Grid>
            )}
        </Grid>
    );
}

export default ClothesGrid
