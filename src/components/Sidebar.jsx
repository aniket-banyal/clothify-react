import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import CustomScrollbar from './CustomScrollbar';


const drawerWidth = 300;


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const Sidebar = ({ title, children }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => setOpen(!open)

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
                sx={{ mr: 2 }}
            >
                <ExpandCircleDownIcon
                    sx={{ transform: 'rotate(-90deg)' }}
                    fontSize='large'
                />
            </IconButton>

            <Drawer
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <CustomScrollbar height={'100%'}>
                    <Box
                        sx={{
                            px: 1,
                        }}
                    >
                        <DrawerHeader>
                            <IconButton onClick={toggleDrawer}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>

                        <Divider variant='fullWidth' />

                        <Box
                            sx={{
                                mt: 2,
                            }}
                        >
                            {title}
                        </Box>

                        {children}
                    </Box>
                </CustomScrollbar>
            </Drawer>
        </>
    );
}

export default Sidebar;
