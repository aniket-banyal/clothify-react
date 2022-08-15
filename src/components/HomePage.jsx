import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GenderContext } from '../context/GenderContext';
import { getPaginatedClothes, infiniteClothKeys } from "../hooks/api/useInfiniteClothes";
import Categories from './Categories';
import CenteredCircularProgress from './CenteredCircularProgress';
import ClothesList from "./ClothesList";
import ErrorFallback from './ErrorFallback';
import HomePageBanner from './HomePageBanner';


const genderValues = [
    {
        'value': 'M',
        'label': 'Men'
    },
    {
        'value': 'W',
        'label': 'Women'
    }
]


const HomePage = () => {
    const [gender, setGender] = useState(genderValues[0].value)

    const queryClient = useQueryClient()
    useEffect(() => {
        genderValues.forEach(({ value: gender }) =>
            queryClient.prefetchInfiniteQuery(
                infiniteClothKeys.list({ gender }),
                () => getPaginatedClothes({ gender })
            )
        )
    }, [])

    return (
        <Container>
            <Stack
                spacing={2}
                alignItems='center'
            >
                <HomePageBanner />

                <GenderContext.Provider value={{ genderValues, gender, setGender }}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Suspense fallback={<CenteredCircularProgress />}>
                            <Categories />
                            <ClothesList />
                        </Suspense>
                    </ErrorBoundary>
                </GenderContext.Provider>
            </Stack>
        </Container>
    );
}

export default HomePage;
