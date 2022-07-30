import { Grid } from "@mui/material";
import Product from "./Product";

const products = [{ "id": 1, "name": "Kurta", "retail_price": 1000, "sell_price": 500, "gender": "Women", "cover_img_url": "https://4.imimg.com/data4/AQ/FS/MY-32578879/over-coat-500x500.jpg" }, { "id": 2, "name": "Reebok Tshirt", "retail_price": 900, "sell_price": 400, "gender": "Men", "cover_img_url": "https://4.imimg.com/data4/AQ/FS/MY-32578879/over-coat-500x500.jpg" }, { "id": 3, "name": "Adidas Ladies Tshirt", "retail_price": 1200, "sell_price": 600, "gender": "Women", "cover_img_url": "https://4.imimg.com/data4/AQ/FS/MY-32578879/over-coat-500x500.jpg" }, { "id": 5, "name": "Velvet Suit", "retail_price": 2500, "sell_price": 1000, "gender": "Men", "cover_img_url": "https://4.imimg.com/data4/AQ/FS/MY-32578879/over-coat-500x500.jpg" }, { "id": 9, "name": "Tes", "retail_price": 2500, "sell_price": 1000, "gender": "Men", "cover_img_url": "https://4.imimg.com/data4/AQ/FS/MY-32578879/over-coat-500x500.jpg" }, { "id": 32, "name": "Coat", "retail_price": 2500, "sell_price": 1000, "gender": "Men", "cover_img_url": "https://res.cloudinary.com/dummy26/image/upload/Screenshot%20%28731%29.pngCoat_Party%20velvet%20suit_2500_1000_XL_M_Black_Coat" }, { "id": 33, "name": "Coat", "retail_price": 2500, "sell_price": 1000, "gender": "Men", "cover_img_url": "https://res.cloudinary.com/dummy26/image/upload/Screenshot%20%28731%29.pngCoat_Party%20velvet%20suit_2500_1000_XL_M_Black_Coat" }]

const ProductsList = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ p: 5 }}
        >
            {products.map(product =>
                <Grid
                    item
                    key={product.id}
                >
                    <Product product={product} />
                </Grid>
            )}
        </Grid>
    );
}

export default ProductsList;