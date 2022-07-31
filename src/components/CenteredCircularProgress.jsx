import { Box, CircularProgress } from "@mui/material";


const CenteredCircularProgress = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100%"
        >
            <CircularProgress />
        </Box>
    );
}

export default CenteredCircularProgress;
