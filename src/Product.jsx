import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

const Product = ({ product }) => {
    return (
        <Card
            sx={{
                width: 180,
                maxWidth: 345,
                borderRadius: 0
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="120"
                    image={product.cover_img_url}
                    alt={product.name}
                    sx={{
                        borderRadius: '0%',
                        objectFit: 'cover'
                    }}
                />
                <CardContent sx={{ textAlign: 'center' }} >
                    <Typography
                        variant="body1"
                        noWrap
                    >
                        {product.name}
                    </Typography>

                    <Stack
                        direction='row'
                        spacing={2}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ textDecorationLine: 'line-through' }}
                        >
                            ₹{product.retail_price}
                        </Typography>

                        <Typography
                            variant="body1"
                            fontWeight={600}
                            color="text.primary"
                        >
                            ₹{product.sell_price}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Product;