import React from "react";
import { Box } from "@mui/system";
import ser from "../Images/ser.png";
import { Typography } from "@mui/material";

export const ProductDetailHeader = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${ser})`,
        backgroundSize: "cover",
        height: "442px",
        color: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        component={Box}
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "64px",
          lineHeight: "96px",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        Product Details
      </Typography>

      <Typography
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "32px",
          textAlign: "center",
          color: "#E6E6E6",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam labore
        modi id error quas quo quia nemo cumque itaque molestiae,
        <br /> iusto omnis nisi qui. Officiis at assumenda expedita suscipit ut!
      </Typography>
    </Box>
  );
};
