import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const width = 60
const text_height = 20
const height = width + text_height

const Category = ({ category }) => {
    return (
        <Stack
            alignItems='center'
            sx={{
                width,
                height,
            }}
        >
            <Box sx={{
                borderRadius: '50%',
                overflow: 'hidden',
                width: width,
                height: width,
                display: 'flex',
                justifyContent: 'center',
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
        </Stack >
    );
}

export default Category;
