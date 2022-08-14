import { Box, Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useClothesPrefetch } from "../hooks/useClothesPrefetch";
import { useSelectedFilters } from "../hooks/useSelectedFilters";


const PriceFilter = ({ minPrice, maxPrice }) => {
    const { selectedPriceRange, setSelectedPriceRange } = useSelectedFilters()
    const { prefetchClothes } = useClothesPrefetch()

    const [min, setMin] = useState(selectedPriceRange[0] ?? '')
    const [max, setMax] = useState(selectedPriceRange[1] ?? '')

    // When selectedPriceRange is changed by clearing the SelectedFilter for price, then need to update min and max
    useEffect(() => {
        setMin(selectedPriceRange[0] ?? '')
        setMax(selectedPriceRange[1] ?? '')
    }, [selectedPriceRange])


    return (
        <Box
            sx={{
                display: 'flex',
                mx: 2,
                mt: 2,
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    width: '100%'
                }}
            >
                <TextField
                    label='Min Price'
                    type="number"
                    variant="outlined"
                    size='medium'
                    InputProps={{
                        inputProps: { min: minPrice, max: maxPrice }
                    }}
                    value={min}
                    onChange={(e) => {
                        let newValue = e.target.value
                        if (newValue)
                            newValue = parseInt(newValue)
                        setMin(newValue)
                    }}
                />

                <TextField
                    label='Max Price'
                    type="number"
                    variant="outlined"
                    size='medium'
                    InputProps={{
                        inputProps: { min: minPrice, max: maxPrice }
                    }}
                    value={max}
                    onChange={(e) => {
                        let newValue = e.target.value
                        if (newValue)
                            newValue = parseInt(newValue)
                        setMax(newValue)
                    }}
                />

                <Button
                    variant='contained'
                    disabled={!(
                        typeof min === 'number' &&
                        typeof max === 'number' &&
                        min >= minPrice &&
                        min <= maxPrice &&
                        max >= minPrice &&
                        max <= maxPrice
                    )}
                    onClick={() => setSelectedPriceRange([min, max])}
                    onMouseEnter={() => prefetchClothes({ price: [min, max] })}
                >
                    Apply
                </Button>
            </Stack>
        </Box>
    );
}

export default PriceFilter;
