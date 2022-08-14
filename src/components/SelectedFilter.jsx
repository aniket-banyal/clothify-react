import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Stack, Typography } from "@mui/material";
import { useClothesPrefetch } from '../hooks/useClothesPrefetch';


const SelectedFilter = ({ name, value, filterName, handleValueChange, nameFormat }) => {
    const { prefetchClothes } = useClothesPrefetch()


    return (
        <Stack
            direction='row'
            alignItems={'center'}
            sx={{
                px: 1.5,
                py: 0.1,
                border: 1,
                borderRadius: 5,
                borderColor: 'grey.600',
                transition: "border 0.18s",
                ":hover": {
                    borderColor: 'grey.300',
                },
            }}
            onMouseEnter={() => {
                // For Color, Cateogry and Size Filter, value will be string or number, and it would already be in array and thus will be removed in prefetchClothes
                if (typeof value === 'string' || typeof value === 'number')
                    prefetchClothes({ [filterName]: value })

                // For PriceFilter value will be an arr [min, max], so that to remove it in prefetchClothes, set it to ''
                else
                    prefetchClothes({ [filterName]: '' })
            }}
        >
            <Typography variant="body2">
                {nameFormat ? nameFormat(name) : name}
            </Typography>

            <IconButton
                disableRipple
                size="small"
                color="inherit"
                edge='end'
                onClick={() => handleValueChange(value)}
            >
                <ClearIcon
                    fontSize='16px'
                />
            </IconButton>
        </Stack>
    );
}

export default SelectedFilter;
