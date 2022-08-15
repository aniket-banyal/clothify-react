import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ClothesPrefetchContext } from '../context/ClothesPrefetchContext';
import { FiltersContext } from '../context/FiltersContext';
import { getPaginatedClothes, infiniteClothKeys } from '../hooks/api/useInfiniteClothes';
import CenteredCircularProgress from './CenteredCircularProgress';
import Filters from './Filters';
import InfiniteClothesList from './InfiniteClothesList';
import SelectedFilters from './SelectedFilters';
import Sidebar from './Sidebar';


const getPrefetchFilterArray = (arr, val) => {
    let newArr = arr.slice()

    // If the val is already in the Array, and this func has been called again that means the filter is already selected and is being hovered again, so the filter might be unselected.
    // Ex, 1, 2, 3 are selected in sequence
    // Now if hover on 1, then '2, 3' might be the next key
    if (val)
        if (newArr.includes(val))
            newArr = newArr.filter(item => item !== val)
        else
            newArr.push(val)

    newArr.sort()
    return newArr
}


const ClothesPage = () => {
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedPriceRange, setSelectedPriceRange] = useState('')

    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')

    const queryClient = useQueryClient()
    const prefetchClothes = ({ category, size, color, priceRange }) => {
        let categories = getPrefetchFilterArray(selectedCategories, category)
        let colors = getPrefetchFilterArray(selectedColors, color)
        let sizes = getPrefetchFilterArray(selectedSizes, size)
        // In SelectedFilter, on hover price is set to ''
        let price = (priceRange?.length === 2 || priceRange === '') ? priceRange : selectedPriceRange

        queryClient.prefetchInfiniteQuery(
            infiniteClothKeys.list({ gender, colors, sizes, categories, price }),
            () => getPaginatedClothes({ gender, colors, sizes, categories, price }),
            { staleTime: 1000 * 60 }
        )
    }

    useEffect(() => {
        setSelectedCategories([])
        setSelectedColors([])
        setSelectedSizes([])
        setSelectedPriceRange('')
    }, [gender])


    return (
        <FiltersContext.Provider
            value={{
                selectedColors, setSelectedColors,
                selectedSizes, setSelectedSizes,
                selectedCategories, setSelectedCategories,
                selectedPriceRange, setSelectedPriceRange,
            }}
        >
            <ClothesPrefetchContext.Provider value={{ prefetchClothes }}>
                <Stack
                    direction='row'
                    alignItems='flex-start'
                    columnGap={6}
                    sx={{
                        height: '100%',
                        minHeight: '100vh',
                        px: 2,
                        overflowX: 'clip',
                    }}
                    component={motion.div}
                >
                    <Suspense fallback={<CenteredCircularProgress minHeight='80vh' />}>
                        <Box
                            sx={{
                                position: 'sticky',
                                top: '50%'
                            }}
                            component={motion.div}
                            initial={{ x: '-10%' }}
                            animate={{ x: 0 }}
                        >
                            <Sidebar title='Filters'>
                                <Suspense fallback={<CenteredCircularProgress />}>
                                    <Stack
                                        direction='column'
                                        spacing={2}
                                        padding={2}
                                    >
                                        <Filters />
                                        <SelectedFilters />
                                    </Stack>
                                </Suspense>
                            </Sidebar>
                        </Box>

                        <InfiniteClothesList />
                    </Suspense>
                </Stack>
            </ClothesPrefetchContext.Provider>
        </FiltersContext.Provider>
    );
}

export default ClothesPage;
