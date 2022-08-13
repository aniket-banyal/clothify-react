import { Stack, Typography } from "@mui/material";


const ClothPageMaterial = ({ material }) => {
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
                Material:
            </Typography>

            <Typography
                variant='body1'
                color='primary.main'
            >
                {material}
            </Typography>
        </Stack>
    );
}

export default ClothPageMaterial;
