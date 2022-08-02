import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ClearIcon from '@mui/icons-material/Clear';


const SelectedFilter = ({ name, value, handleValueChange }) => {

    return (
        <Grid
            item
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, }}
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
                    {name}
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
        </Grid>
    );
}

export default SelectedFilter;
