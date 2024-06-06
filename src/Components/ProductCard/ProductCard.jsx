// src/components/ProductCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  const truncateDescription = (description, length) => {
    return description.length > length
      ? description.substring(0, length) + "..."
      : description;
  };
  const truncateTitle = (description, length) => {
    return description.length > length
      ? description.substring(0, length) + "..."
      : description;
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            title={product.title}
            sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {truncateTitle(product.title, 20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateDescription(product.description, 100)}
          </Typography>
          <Typography variant="h6" component="div" sx={{ mt: 2 }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" color="primary" variant="contained">
          Add to Cart
        </Button>
        <Button size="small" color="secondary" variant="contained">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
