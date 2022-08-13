import { Stack, Typography } from "@mui/material";


const ClothPageColor = ({ color }) => {
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
                Color:
            </Typography>

            <Typography
                variant='body1'
                color='primary.main'
            >
                {color}
            </Typography>
        </Stack>
    );
}

export default ClothPageColor;
