import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { clientreview } from "../Banner/Data";
import React, { useState } from "react";
import Slider from "react-slick";

export const Clientreviw = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [value, setValue] = React.useState(5);
  return (
    <Container sx={{ marginTop: "150px" }} maxWidth="xl">
      <div className="banner">
        <Typography
          sx={{ textAlign: "center", marginBottom: "50px" }}
          variant="h3"
        >
          Our Client Review
        </Typography>
        <Slider {...settings}>
          {clientreview.map((item) => (
            <Box
              sx={{
                maxWidth: "360px",
                height: "258px",
                // border: "2px solid black",
                paddingLeft: 3,
                paddingTop: 8,
                boxShadow: "0px 0px 20px rgba(103, 89, 255, 0.08)",
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />

              <Typography
                sx={{
                  width: "290px",
                  height: "80px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#2D2D2D",
                }}
              >
                {item.message}
              </Typography>
              <hr />
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={item.linkImg} />
                <Stack direction="column" spacing={1}>
                  <Typography
                    sx={{
                      marginTop: "5px",
                      width: "150px",
                      height: "17px",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#121212",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      width: "150px",
                      height: "15px",
                      fontFamily: "Inter",
                      fontStyle: " normal",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#6F767E",
                    }}
                  >
                    {item.post}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Slider>
      </div>
    </Container>
  );
};
