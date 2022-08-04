import { Typography } from "@mui/material"


const ErrorFallback = ({ error, resetErrorBoundary }) => {
    console.error(error)

    return (
        <Typography>Something went wrong </Typography>
    )
}

export default ErrorFallback