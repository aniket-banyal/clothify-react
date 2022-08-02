import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useSelectedFilters } from "../hooks/useSelectedFilters";
import ClearIcon from '@mui/icons-material/Clear';
import { AnimatePresence, motion } from 'framer-motion'


const SelectedFilters = () => {
    const { selectedColors, setSelectedColors, selectedSizes, selectedCategories } = useSelectedFilters()

    const handleColorChange = (clearedColor) => {
        setSelectedColors(selectedColors.filter(color => color !== clearedColor))
    }

    return (
        <Grid container spacing={2}>
            <AnimatePresence>
                {selectedColors.map(color =>
                    <Grid
                        item
                        key={color}
                        component={motion.div}
                        initial={{ opacity: 0.5, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0.5, x: 50 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Stack
                            direction='row'
                            alignItems={'center'}
                            sx={{
                                px: 1.5,
                                py: 0.1,
                                border: 1,
                                borderRadius: 5,
                                borderColor: 'grey.600',
                                transition: "border 0.2s",
                                ":hover": {
                                    borderColor: 'grey.400',
                                },
                            }}
                        >
                            <Typography variant="body2">
                                {color}
                            </Typography>

                            <IconButton
                                disableRipple
                                size="small"
                                color="inherit"
                                edge='end'
                                onClick={() => handleColorChange(color)}
                            >
                                <ClearIcon
                                    fontSize='16px'
                                />
                            </IconButton>
                        </Stack>
                    </Grid>
                )}
            </AnimatePresence>
        </Grid >
    );
}

export default SelectedFilters;
