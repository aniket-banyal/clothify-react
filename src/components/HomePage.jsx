import { Stack, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import Categories from "./Categories";
import ClothesList from "./ClothesList";
import HomePageBanner from "./HomePageBanner";
import CenteredCircularProgress from './CenteredCircularProgress';
import { ErrorBoundary } from "react-error-boundary";
import { GenderContext } from '../context/GenderContext'
import { useQueryClient } from "@tanstack/react-query";
import { getClothes } from "../hooks/api/useClothes";
import ErrorFallback from './ErrorFallback'
import { Container } from "@mui/system";


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
        genderValues.forEach(({ value }) => queryClient.prefetchQuery([`clothes ${value}`], () => getClothes({ gender: value })))
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
