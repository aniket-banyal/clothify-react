import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';


const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
}

const pages = [
    {
        name: 'Men',
        link: 'clothes?gender=M'
    },
    {
        name: 'Women',
        link: 'clothes?gender=W'
    },
]


const Navbar = () => {
    return (
        <>
            {/* <HideOnScroll> */}
            <AppBar>
                <Toolbar>
                    <Typography
                        variant="h6"
                        color='inherit'
                        component={RouterLink}
                        to={'/'}
                    >
                        Clothify
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={RouterLink}
                                to={page.link}
                                key={page.name}
                                sx={{ my: 2, mx: 2, color: 'white' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            {/* </HideOnScroll> */}
            <Toolbar sx={{ mb: 2 }} />
        </>
    )
}

export default Navbar
