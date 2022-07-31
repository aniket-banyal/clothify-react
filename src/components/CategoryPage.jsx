import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import useClothesByCategory from "../hooks/api/useClothesByCategory";
import Cloth from "./Cloth";


const CategoryPage = () => {
    const { categoryId } = useParams()
    const { data: clothes } = useClothesByCategory(categoryId)

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

export default CategoryPage;
