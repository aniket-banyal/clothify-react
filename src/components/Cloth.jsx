import { CardActionArea, Stack } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { useQueryClient } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getCloth } from "../hooks/api/useCloth"
import { clothKeys } from "../hooks/api/useClothes"

const Cloth = ({ cloth, width = 220, height = 200, maxWidth = 345 }) => {
  const queryClient = useQueryClient()
  const prefetchCloth = ({ clothId }) => {
    queryClient.prefetchQuery(clothKeys.detail(clothId), () =>
      getCloth({ clothId })
    )
  }

  return (
    <Card
      sx={{
        width,
        maxWidth,
        borderRadius: 2,
      }}
      onMouseEnter={() => prefetchCloth({ clothId: cloth.id })}
    >
      <CardActionArea component={Link} to={`/clothes/${cloth.id}`}>
        <CardMedia
          component="img"
          height={height}
          image={cloth.cover_img_url}
          alt={cloth.name}
          sx={{
            borderRadius: "0%",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="body1" noWrap>
            {cloth.name}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textDecorationLine: "line-through" }}
            >
              ₹{cloth.retail_price}
            </Typography>

            <Typography variant="body1" fontWeight={600} color="text.primary">
              ₹{cloth.sell_price}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Cloth
