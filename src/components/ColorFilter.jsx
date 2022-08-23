import { Box, Stack, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import useColors from "../hooks/api/useColors";
import { useClothesPrefetch } from "../hooks/useClothesPrefetch";
import { useSelectedFilters } from '../hooks/useSelectedFilters';


const ColorFilter = () => {
    const { data: colors } = useColors()
    const { selectedColors, setSelectedColors } = useSelectedFilters()
    const { prefetchClothes } = useClothesPrefetch()

    const handleChange = (event) => {
        if (event.target.checked)
            setSelectedColors([...selectedColors, event.target.name])
        else
            setSelectedColors(selectedColors.filter(color => color !== event.target.name))
    }


    return (
        <Box
            sx={{
                display: 'flex',
                ml: 2,
            }}>
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    {colors.map(({ name, count }) =>
                        <Stack
                            key={name}
                            direction={'row'}
                            alignItems={'center'}
                        >
                            <FormControlLabel
                                label={<Typography variant="body2" color="text.secondary">{name}</Typography>}
                                control={
                                    <Checkbox
                                        sx={{ color: name }}
                                        checked={selectedColors.includes(name)}
                                        onChange={handleChange}
                                        name={name}
                                    />
                                }
                                onMouseEnter={() => prefetchClothes({ color: name })}
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

export default ColorFilter;
