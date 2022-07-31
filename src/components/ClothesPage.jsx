import { Grid, Typography } from '@mui/material';
import useClothes from '../hooks/api/useClothes'
import ClothesGrid from "./ClothesGrid";
import Filters from './Filters';
import { ColorContext } from '../context/ColorContext'
import { useState } from 'react';

const ClothesPage = () => {
    const [selectedColors, setSelectedColors] = useState([])
    const { data: clothes } = useClothes({ colors: selectedColors })

    return (
        <ColorContext.Provider value={{ selectedColors, setSelectedColors }}>
            <Grid
                container
                spacing={4}
                sx={{ mt: 2 }}
            >
                <Grid item xs={12} sm={8} md={9}>
                    {clothes.length > 0 ?
                        <ClothesGrid clothes={clothes} />
                        :
                        <Typography variant='h6'> No such clothes found </Typography>
                    }
                </Grid>

                <Grid item xs={0} sm={4} md={3}>
                    <Filters />
                </Grid>
            </Grid>
        </ColorContext.Provider>
    );
}

export default ClothesPage;
