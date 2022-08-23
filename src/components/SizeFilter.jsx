import { Box, Stack, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import useSizes from "../hooks/api/useSizes";
import { useClothesPrefetch } from "../hooks/useClothesPrefetch";
import { useSelectedFilters } from "../hooks/useSelectedFilters";


const SizeFilter = () => {
    const { data: sizes } = useSizes()
    const { selectedSizes, setSelectedSizes } = useSelectedFilters()
    const { prefetchClothes } = useClothesPrefetch()

    const handleChange = (event) => {
        const name = event.target.name
        if (event.target.checked)
            setSelectedSizes([...selectedSizes, name])
        else
            setSelectedSizes(selectedSizes.filter(size => size !== name))
    }


    return (
        <Box
            sx={{
                display: 'flex',
                ml: 2,
            }}>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    {sizes.map(({ name, count }) =>
                        <Stack
                            key={name}
                            direction={'row'}
                            alignItems={'center'}
                        >

                            <FormControlLabel
                                label={<Typography variant="body2" color="text.secondary">{name}</Typography>}
                                control={
                                    <Checkbox
                                        checked={selectedSizes.includes(name)}
                                        onChange={handleChange}
                                        name={name}
                                    />
                                }
                                onMouseEnter={() => prefetchClothes({ size: name })}
                            />
                            <Typography
                                color={'grey.500'}
                                variant={'body2'}
                            >
                                ({count})
                            </Typography>
                        </Stack>
                    )}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default SizeFilter;
