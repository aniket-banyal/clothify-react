import { useTheme } from "@emotion/react";
import { Scrollbars } from 'react-custom-scrollbars-2';


const CustomScrollbar = ({ height, children, ...props }) => {
    const theme = useTheme()


    return (
        <Scrollbars
            renderThumbVertical={() => <div style={{ backgroundColor: theme.palette.grey['700'] }} />}
            style={{ height }}
            thumbSize={height / 5}
            {...props}
        >
            {children}
        </Scrollbars >
    );
}

export default CustomScrollbar;
