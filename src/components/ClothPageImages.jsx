import { Box } from "@mui/material";


const ClothPageImages = ({ cloth }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <img
                src={cloth.cover_img_url}
                style={{
                    width: '80%',
                    objectFit: 'cover',
                }}
            />
        </Box>
    );
}

export default ClothPageImages;
