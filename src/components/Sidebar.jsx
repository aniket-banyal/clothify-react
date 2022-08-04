import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';


const drawerWidth = 280;


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
                <MenuIcon />
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
            >
                <DrawerHeader>
                    <Stack
                        sx={{
                            width: '100%',
                        }}
                        direction='row'
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Typography
                            variant='h5'
                            color='primary.main'
                            sx={{ ml: 2 }}
                        >
                            {title}
                        </Typography>

                        <IconButton onClick={toggleDrawer}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </Stack>
                </DrawerHeader>

                {children}
            </Drawer>
        </>
    );
}

export default Sidebar;
