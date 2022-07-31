import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
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
        name: 'Explore',
        link: 'clothes'
    },
]


const Navbar = () => {
    return (
        <>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Clothify
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    component={RouterLink}
                                    to={page.link}
                                    key={page.name}
                                    sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar sx={{ mb: 2 }} />
        </>
    )
}

export default Navbar
