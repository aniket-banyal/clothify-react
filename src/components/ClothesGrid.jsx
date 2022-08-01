import { Grid } from "@mui/material";
import Cloth from "./Cloth";

const ClothesGrid = ({ clothes, width, height, maxWidth }) => {
    return (
        <Grid
            container
            spacing={2}
        >
            {clothes.map(cloth =>
                <Grid item key={cloth.id}>
                    <Cloth
                        cloth={cloth}
                        width={width}
                        height={height}
                        maxWidth={maxWidth}
                    />
                </Grid>
            )}
        </Grid>
    );
}

export default ClothesGrid
