import { Grid, Stack, Typography } from '@mui/material';
import useClothes from '../hooks/api/useClothes'
import ClothesGrid from "./ClothesGrid";
import Filters from './Filters';
import { FiltersContext } from '../context/FiltersContext'
import { Suspense, useState } from 'react';
import CenteredCircularProgress from './CenteredCircularProgress'
import { useSearchParams } from 'react-router-dom'
import { Box } from '@mui/system';
import SelectedFilters from './SelectedFilters';
import Sidebar from './Sidebar';


let suspense = false
const ClothesPage = () => {
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])

    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')

    const { data: clothes, isLoading } = useClothes({
        gender,
        colors: selectedColors,
        sizes: selectedSizes,
        categories: selectedCategories,
    }, suspense)


    return (
        <Box sx={{
            my: 6,
            mx: 2,
        }}>
            <FiltersContext.Provider
                value={{
                    selectedColors, setSelectedColors,
                    selectedSizes, setSelectedSizes,
                    selectedCategories, setSelectedCategories,
                }}>
                <Sidebar title='Filters'>
                    <Suspense fallback={<CenteredCircularProgress />}>
                        <Stack
                            direction='column'
                            spacing={2}
                            padding={2}
                        >
                            <Suspense fallback={<></>}>
                                <Filters />
                            </Suspense>

                            <SelectedFilters />
                        </Stack>
                    </Suspense>
                </Sidebar>

                {isLoading ?
                    <CenteredCircularProgress />
                    :
                    clothes.length > 0 ?
                        <ClothesGrid clothes={clothes} />
                        :
                        <Typography variant='h6'> No such clothes found </Typography>
                }
            </FiltersContext.Provider>
        </Box>
    );
}

export default ClothesPage;
