import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";


const mini_img_wrapper_size = 80


const ClothPageImages = ({ cloth }) => {
    const img_urls = [cloth.cover_img_url, ...cloth.images]
    const [selectedImgIdx, setSelectedImgIdx] = useState(0)

    return (
        <Stack
            direction='row'
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Stack
                spacing={2}
            >
                {img_urls.map((url, i) =>
                    <Box
                        key={url}
                        onMouseOver={() => setSelectedImgIdx(i)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: selectedImgIdx === i ? '0 0 12px 6px gray' : 0,
                            width: mini_img_wrapper_size,
                            height: mini_img_wrapper_size,
                        }}
                    >
                        <img
                            src={url}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                )}
            </Stack >

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={img_urls[selectedImgIdx]}
                    style={{
                        width: '80%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Stack>
    );
}

export default ClothPageImages;
