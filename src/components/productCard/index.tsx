import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const ProductCard = ({ productName, price, productImages, discount }: any) => {
  return (
    <div>

<Card sx={{ width: "280px", height: "420px", boxShadow: "none", margin: 2 }}>
      <Box
        sx={{
          background: "#F5F6F6",
          borderRadius: 4,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          p: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              background: "#003D29",
              padding: "4px 10px",
              borderRadius: 2,
            }}
          >
            {discount}%
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FavoriteBorderIcon sx={{ color: "#403A43" }} />
            <VisibilityOutlinedIcon sx={{ color: "#403A43", mt: 1 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "200px", // Fixed size for the image container
            overflow: "hidden",
          }}
        >
          <img
            src={productImages || "/images/manwearingheadphone.png"}
            alt="Product"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain", // Ensures the image retains its original aspect ratio
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 18,
            width: "170px",
            height: "50px",
          }}
        >
          {productName}
        </Typography>
        <Box sx={{ display: "flex", mt: 1 }}>
          <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
          <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
          <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
          <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
          <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
        </Box>
      </Box>

      <Box sx={{ padding: "0 16px 16px" }}>
        <Typography sx={{ color: "#403A43", fontWeight: 600, fontSize: 16 }}>
          Rs. {price}
        </Typography>
        <Button
          size="small"
          sx={{
            background: "#fff",
            color: "#003D29",
            padding: "4px 16px",
            border: 1,
            borderRadius: 4,
            borderColor: "#003D29",
            textTransform: "none",
            width: { xs: '100%', sm: 'auto' }, // Responsive width
            "&:hover": {
              backgroundColor: "#003D29",
              color: "#fff",
            },
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
      {/* new card */}
      {/* <Card
        sx={{ width: "280px", height: "420px", boxShadow: "none", margin: 2 }}
      >
        <Box
          sx={{
            background: "#F5F6F6",
            borderRadius: 4,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            p: 2,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                background: "#003D29",
                padding: "4px 10px",
                borderRadius: 2,
              }}
            >
              {discount}%
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FavoriteBorderIcon sx={{ color: "#403A43" }} />
              <VisibilityOutlinedIcon sx={{ color: "#403A43", mt: 1 }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px 0",
            }}
          >
            <img
              src={productImages || "/images/manwearingheadphone.png"}
              width={100}
              height={100}
              alt="Product"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 16px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 18,
              width: "170px",
              height: "50px",
            }}
          >
            {productName}
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
          </Box>
        </Box>

        <Box sx={{ padding: "0 16px 16px" }}>
          <Typography sx={{ color: "#403A43", fontWeight: 600, fontSize: 16 }}>
            Rs. {price}
          </Typography>
          <Button
            size="small"
            sx={{
              background: "#fff",
              color: "#003D29",
              padding: "4px 16px",
              border: 1,
              borderRadius: 4,
              borderColor: "#003D29",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#003D29",
                color: "#fff",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card> */}

      {/* old card */}
      {/* <Card sx={{ width: "280px", boxShadow: "none" }}>

        <Box
          sx={{
            background: "#F5F6F6",
            borderRadius: 2,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            p: 1,
          }}
        >
          <Typography
              sx={{
                color: "#fff",
                background: "#003D29",
                pb: 0.5,
                pt: 0.5,
                pr: 2.5,
                pl: 2.5,
                borderRadius:2,
                width:70
              }}
            >
              40%
            </Typography>
          <div
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: 1,
              }}
            >
              <FavoriteBorderIcon sx={{ color: "#403A43" }} />
              <VisibilityOutlinedIcon sx={{ color: "#403A43",mt:1 }} />
            </Box>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pb: 5,
              pt: 5,
            }}
          >
            <img src="/images/led.png" width={100} height={100} />
          </Box>
        </Box>


        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 500,
            fontSize: 18,
            color: "#403A43",
            pr: 1,
            pt: 1,
            pl: 1,
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
            AirPods Max
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
            <StarIcon sx={{ fontSize: "14px", color: "#FFAD33" }} />
          </Box>
        </Box>
        <Box sx={{ pr: 1, pb: 1, pl: 1 }}>
          <Typography sx={{ color: "#403A43", fontWeight: 600, fontSize: 16 }}>
            Rs 15000
          </Typography>
          <Button
            size="small"
            sx={{
              background: "#fff",
              color: "#003D29",
              pl: 2,
              pr: 2,
              border: 1,
              borderRadius: 4,
              borderColor: "#003D29",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#003D29",
                color: "#fff",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card> */}
    </div>
  );
};

export default ProductCard;
