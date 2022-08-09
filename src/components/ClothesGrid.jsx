import { Grid } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion';
import Cloth from "./Cloth";


const ClothesGrid = ({ clothes, width, height, maxWidth }) => {
    return (
        <Grid
            container
            spacing={2}
        >
            <AnimatePresence initial={false} >
                {clothes.map(cloth =>
                    <Grid
                        item
                        key={cloth.id}
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Cloth
                            cloth={cloth}
                            width={width}
                            height={height}
                            maxWidth={maxWidth}
                        />
                    </Grid>
                )}
            </AnimatePresence>
        </Grid>
    );
}

export default ClothesGrid
