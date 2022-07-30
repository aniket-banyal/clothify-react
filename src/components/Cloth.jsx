import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

const Cloth = ({ cloth }) => {
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
                    image={cloth.cover_img_url}
                    alt={cloth.name}
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
                        {cloth.name}
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
                            ₹{cloth.retail_price}
                        </Typography>

                        <Typography
                            variant="body1"
                            fontWeight={600}
                            color="text.primary"
                        >
                            ₹{cloth.sell_price}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Cloth;