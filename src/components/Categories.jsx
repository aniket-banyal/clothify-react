import { Stack } from "@mui/material"
import useCategories from "../hooks/api/useCategories";
import Category from "./Category";


const Categories = () => {
    const { data } = useCategories()
    const categories = data.slice(0, 12)

    return (
        <Stack
            direction='row'
            spacing={4}
            justifyContent='center'
            sx={{
                width: '90%',
            }}
        >
            {categories.map(category =>
                <Category
                    key={category.name}
                    category={category}
                />
            )}
        </Stack >
    );
}

export default Categories;
