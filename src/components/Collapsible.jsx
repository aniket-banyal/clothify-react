import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { styled } from "@mui/system";
import { Collapse, IconButton, Stack, Typography } from "@mui/material";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Collapsible = ({ title, children, expanded, toggleExpanded }) => {

    return (
        <>
            <Stack direction='row' justifyContent={'space-between'} alignItems='center'>
                <Typography color={expanded ? 'primary.main' : 'text.primary'}>
                    {title}
                </Typography>
                <ExpandMore
                    expand={expanded ? 1 : 0}
                    onClick={toggleExpanded}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Stack>

            <Collapse in={expanded} timeout="auto">
                {children}
            </Collapse>
        </>
    );
}

export default Collapsible;
