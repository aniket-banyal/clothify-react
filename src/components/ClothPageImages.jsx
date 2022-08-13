import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const imgHeight = 400
const thumbImgHeight = 80


const ClothPageImages = ({ cloth }) => {
    const img_urls = [cloth.cover_img_url, ...cloth.images]
    const items = img_urls.map(url => ({
        original: url,
        thumbnail: url,
    }))

    return (
        <ImageGallery
            items={items}
            slideDuration={300}
            showThumbnails
            showPlayButton={false}
            showFullscreenButton={false}
            renderItem={({ original }) => {
                return (
                    <Box
                        sx={{
                            height: imgHeight
                        }}
                    >
                        <img
                            src={original}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover'
                            }}
                        >
                        </img>
                    </Box>
                )
            }}
            renderThumbInner={({ thumbnail }) => {
                return (
                    <Box
                        sx={{
                            height: thumbImgHeight
                        }}
                    >
                        <img
                            src={thumbnail}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover'
                            }}
                        >
                        </img>
                    </Box>
                )
            }}
        />
    );
}

export default ClothPageImages;
