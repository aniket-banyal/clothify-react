import { Stack } from "@mui/material"
import { useMemo } from "react";
import useCategories from "../hooks/api/useCategories";
import Category from "./Category";
import GenderRadio from "./GenderRadio";
import { useGender } from '../hooks/useGender'

const Categories = () => {
    const { gender } = useGender()
    const { data } = useCategories()
    const filteredCategories = useMemo(() => {
        return data.filter(category => category.gender === gender)
    }, [data, gender])

    return (
        <>
            <GenderRadio />

            <Stack
                direction='row'
                spacing={4}
                justifyContent='center'
                sx={{
                    width: '90%',
                    overflowX: 'scroll'
                }}
            >
                {filteredCategories.map(category =>
                    <Category
                        key={category.id}
                        category={category}
                    />
                )}
            </Stack>
        </>
    );
}

export default Categories;
