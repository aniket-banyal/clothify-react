import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useCloth from "../hooks/api/useCloth";
import ClothPageColor from "./ClothPageColor";
import ClothPageImages from './ClothPageImages';
import ClothPageSize from "./ClothPageSize";


const ClothPage = () => {
    const { clothId } = useParams()
    const { data: cloth } = useCloth({ clothId })


    return (
        <Box
            sx={{
                p: 4,
            }}
        >
            <Grid
                container
                direction='row'
                rowSpacing={4}
                columnSpacing={6}
                justifyContent='center'

            >
                <Grid item xs={12} sm={8} md={6}>
                    <ClothPageImages cloth={cloth} />
                </Grid>

                <Grid item xs={12} sm={4} md={6}>
                    <Stack
                        spacing={4}
                        alignItems='flex-start'
                        sx={{
                            width: '90%'
                        }}
                    >
                        <Stack
                            direction='row'
                            alignItems='center'
                            justifyContent='space-between'
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant="h4"
                                color='success.main'

                            >
                                {cloth.name}
                            </Typography>

                            <Typography
                                variant="h5"
                                color="text.primary"
                            >
                                ₹{cloth.sell_price}
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                width: '90%',
                            }}
                        >
                            <Typography
                                variant="body1"
                            >
                                {cloth.description}
                            </Typography>
                        </Box>

                        <ClothPageSize
                            size={cloth.size}
                        />

                        <ClothPageColor
                            color={cloth.color}
                        />

                        <Stack
                            direction='row'
                            spacing={2}
                        >
                            <Button
                                variant='outlined'
                                size='large'
                                color='primary'
                                endIcon={<ShoppingBagOutlinedIcon />}
                            >
                                Add to Cart
                            </Button>

                            <Button
                                variant='contained'
                                size='large'
                                color='success'
                                endIcon={<ArrowForwardIcon />}
                            >
                                Buy Now
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box >
    );
}

export default ClothPage;
