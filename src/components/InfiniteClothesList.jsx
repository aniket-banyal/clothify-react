import { CircularProgress, Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useInfiniteClothes } from "../hooks/api/useInfiniteClothes"
import { useSelectedFilters } from "../hooks/useSelectedFilters"
import ClothesGrid from "./ClothesGrid"


const InfiniteClothesList = () => {
    const [searchParams] = useSearchParams()
    const gender = searchParams.get('gender')

    const { selectedColors, selectedSizes, selectedCategories } = useSelectedFilters()

    const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isPreviousData } = useInfiniteClothes({
        gender,
        colors: selectedColors,
        sizes: selectedSizes,
        categories: selectedCategories,
    })
    const clothes = data?.pages || []

    useEffect(() => {
        let fetching = false
        const onScroll = async (e) => {
            const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement

            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.6) {
                fetching = true
                if (hasNextPage)
                    await fetchNextPage()
                fetching = false
            }
        }

        document.addEventListener("scroll", onScroll)

        return () => document.removeEventListener("scroll", onScroll)
    }, [])


    return (
        <>
            <Stack
                sx={{
                    py: 2,
                    filter: isPreviousData ? "blur(6px)" : 'none',
                    pointerEvents: isPreviousData ? 'none' : 'auto',
                }}
                rowGap={4}
                alignItems='center'
            >
                {
                    clothes.length > 0 ?
                        <ClothesGrid clothes={clothes} />
                        :
                        <Typography variant='h6'> No such clothes found </Typography>
                }

                {isFetchingNextPage &&
                    <CircularProgress />
                }
            </Stack>
        </>
    );
}

export default InfiniteClothesList;
