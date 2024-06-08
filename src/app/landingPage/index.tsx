import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import f from "../../../public/images/manwearingheadphone.png";
import ProductCard from "@/components/productCard";
import { MyProducts } from "@/helper/productData";

const LandingPage = () => {
  console.log('edit',MyProducts[0].products?.filter((el:any)=> el > 7))
  return (   
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 5,
          m: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          xs={2}
          sx={{
            minHeight: 300,
            color: "#000",
            borderRadius: 4,
            padding: 1,
            border: 1,
            borderColor: "#D9D9D9",
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 22, color: "#003D28" }}>
            Categories
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography>Womens's Fashion</Typography>
            <Typography>Mens's Fashion</Typography>
            <Typography>Home & Lifestyle</Typography>
            <Typography>Health & Beauty</Typography>
          </Box>
        </Grid>

        <Grid
          xs={9}
          sx={{
            background: "url(/images/adImg1.jpg) no-repeat center center",
            // backgroundSize: "cover",
            color: "#000",
            ml: 3,
            minHeight: 300,
            borderRadius: 4,
            padding: 1,
          }}
        ></Grid>
      </Grid>

      <Box
        sx={{
          mt: 5,
          m: 1,
          ml:8,
          mr:8,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // background:'pink'
        }}
      >

      <Box>
        <Typography sx={{ color: "black",fontSize:20,fontWeight:600 }}>Explore Our</Typography>
      </Box>

      <Grid container spacing={2} sx={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }} >
          {MyProducts[0].products?.map((items: any) => (
            <ProductCard
              productName={items.productName}
              productImages={items.productImages}
              price={items.price}
              discount={items.productDiscountPercent}
            />
          ))}
        </Grid>

      </Box>
    </div>
  );
};

export default LandingPage;
