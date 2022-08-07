import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiltersContext } from '../context/FiltersContext';
import useClothes from '../hooks/api/useClothes';
import CenteredCircularProgress from './CenteredCircularProgress';
import ClothesGrid from "./ClothesGrid";
import Filters from './Filters';
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
        <FiltersContext.Provider
            value={{
                selectedColors, setSelectedColors,
                selectedSizes, setSelectedSizes,
                selectedCategories, setSelectedCategories,
            }}>
            <Stack
                direction='row'
                alignItems='flex-start'
                spacing={2}
            >
                <Box
                    sx={{
                        position: 'sticky',
                        top: '50%'
                    }}
                >
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
                </Box>

                {isLoading ?
                    <CenteredCircularProgress />
                    :
                    clothes.length > 0 ?
                        <ClothesGrid clothes={clothes} />
                        :
                        <Typography variant='h6'> No such clothes found </Typography>
                }
            </Stack>
        </FiltersContext.Provider>
    );
}

export default ClothesPage;
