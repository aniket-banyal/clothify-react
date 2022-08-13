import { Stack, Typography } from "@mui/material";


const ClothPageSize = ({ size }) => {
    return (
        <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            alignContent='center'
        >
            <Typography
                variant='body1'
            >
                Size:
            </Typography>

            <Typography
                variant='body1'
                color='primary.main'
            >
                {size}
            </Typography>
        </Stack>
    );
}

export default ClothPageSize;
