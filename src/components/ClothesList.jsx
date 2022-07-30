import { Grid } from "@mui/material";
import Cloth from "./Cloth";
import useClothes from '../hooks/api/useClothes'


const ClothesList = () => {
    const { data: clothes } = useClothes()


    return (
        <Grid
            container
            spacing={2}
            sx={{ p: 5 }}
        >
            {clothes.map(cloth =>
                <Grid
                    item
                    key={cloth.id}
                >
                    <Cloth cloth={cloth} />
                </Grid>
            )}
        </Grid>
    );
}

export default ClothesList;