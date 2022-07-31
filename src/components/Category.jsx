import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";



const width = 60
const text_height = 20

const Category = ({ category }) => {
    return (
        <Card
            sx={{
                width: width * 2,
                maxWidth: width * 3,
                minWidth: width * 1.5,
                bgcolor: 'transparent',
                backgroundImage: 'none'
            }}
            elevation={0}
        >
            <CardActionArea
                to={`categories/${category.id}`}
                component={RouterLink}
            >
                <CardContent>
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Box sx={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: width,
                            height: width,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img
                                src="https://res.cloudinary.com/dummy26/image/upload/tshirt.jpgTshirt_Navy%20blue%20tshirt_900_300_M_M_Black_Blazer%20-%20M"
                                alt={category.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>

                        <Box sx={{
                            width: width,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography
                                variant="caption"
                                noWrap
                            >
                                {category.name}
                            </Typography>
                        </Box>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Category;
