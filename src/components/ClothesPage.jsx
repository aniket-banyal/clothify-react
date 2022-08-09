import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Suspense, useState } from 'react';
import { FiltersContext } from '../context/FiltersContext';
import CenteredCircularProgress from './CenteredCircularProgress';
import Filters from './Filters';
import InfiniteClothesList from './InfiniteClothesList';
import SelectedFilters from './SelectedFilters';
import Sidebar from './Sidebar';


const ClothesPage = () => {
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])


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
                sx={{ height: '100%' }}
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

                <Suspense fallback={<CenteredCircularProgress />}>
                    <InfiniteClothesList />
                </Suspense>
            </Stack>
        </FiltersContext.Provider>
    );
}

export default ClothesPage;
