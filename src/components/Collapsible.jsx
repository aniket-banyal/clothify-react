import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";


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
            <Stack
                direction='row'
                justifyContent={'space-between'}
                alignItems='center'
                sx={{
                    px: 1
                }}
            >
                <Typography
                    color={expanded ? 'primary.main' : 'text.primary'}
                    sx={{ ml: 2 }}
                >
                    {title}
                </Typography>
                <ExpandMore
                    expand={expanded ? 1 : 0}
                    onClick={toggleExpanded}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Stack>

            <Collapse in={expanded} timeout="auto"
                sx={{
                    px: 1
                }}
            >
                {children}
            </Collapse>
        </>
    );
}

export default Collapsible;
