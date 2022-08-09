import { Box, CircularProgress } from "@mui/material";


const CenteredCircularProgress = ({ minHeight = '100%', minWidth = '100%' }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={minHeight}
            minWidth={minWidth}
        >
            <CircularProgress />
        </Box>
    );
}

export default CenteredCircularProgress;
