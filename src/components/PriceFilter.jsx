import { Box, Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import usePriceRange from "../hooks/api/usePriceRange";
import { useClothesPrefetch } from "../hooks/useClothesPrefetch";
import { useSelectedFilters } from "../hooks/useSelectedFilters";


const PriceInput = ({ label, value, setValue, minPrice, maxPrice }) => {
    const onChange = (e) => {
        let newValue = e.target.value
        if (newValue)
            newValue = parseInt(newValue)
        setValue(newValue)
    }

    return (
        <TextField
            label={label}
            type="number"
            variant="outlined"
            size='medium'
            value={value}
            onChange={onChange}
            InputProps={{
                inputProps: { min: minPrice, max: maxPrice }
            }}
        />
    )
}


const PriceFilter = () => {
    const { data: priceRange } = usePriceRange()
    const { min_price: minPrice, max_price: maxPrice } = priceRange
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
                <PriceInput
                    label='Min Price'
                    value={min}
                    setValue={(value) => setMin(value)}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />

                <PriceInput
                    label='Max Price'
                    value={max}
                    setValue={(value) => setMax(value)}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
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
