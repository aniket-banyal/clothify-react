import { Stack, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import Categories from "./Categories";
import ClothesList from "./ClothesList";
import HomePageBanner from "./HomePageBanner";
import CenteredCircularProgress from './CenteredCircularProgress';
import { ErrorBoundary } from "react-error-boundary";
import { GenderContext } from '../context/GenderContext'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <Typography>Something went wrong</Typography>
    )
}

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


    return (
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
    );
}

export default HomePage;
