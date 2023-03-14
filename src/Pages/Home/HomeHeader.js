import * as React from "react";
import { Box } from "@mui/system";
import img from "../../Images/img.png";
import { Stack, Typography, styled } from "@mui/material";

export const HomeHeader = () => {
  return (
    <Box sx={{ marginBottom: { xs: "550px", lg: "150px" } }}>
      <Box
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          height: "592px",
          color: "#f5f5f5",
        }}
      >
        <Typography variant="h2" align="center">
          Best Repair Services For <br /> Company Name
        </Typography>

        <Stack
          sx={{
            justifyContent: "center",

            marginTop: { xs: "355px", lg: "280px" },
          }}
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
        >
          <Box
            sx={{
              background: "#FFFFFF",
              width: "307px",
              height: "320px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "52px",
                height: "52px",
                border: "2px solid black",
                background: "#6759FF",
                margin: "54px",
                marginBottom: "0px",
              }}
            ></Box>
            <Typography
              sx={{
                margin: "36px",
                marginBottom: "10px",
                width: "224px",
                height: "29px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "29px",
                textTransform: "capitalize",
                color: "#1A1B2D",
              }}
            >
              Repairing Service
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                textTransform: "capitalize",
                color: "#6F767E",
                padding: "14px",
              }}
            >
              There are many variations of passages available but the majority
              have suffered alter humou
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#FFFFFF",
              width: "307px",
              height: "320px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "52px",
                height: "52px",
                border: "2px solid black",
                background: "#6759FF",
                margin: "54px",
                marginBottom: "0px",
              }}
            ></Box>
            <Typography
              sx={{
                margin: "36px",
                marginBottom: "10px",
                width: "224px",
                height: "29px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "29px",
                textTransform: "capitalize",
                color: "#1A1B2D",
              }}
            >
              Repairing Service
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                textTransform: "capitalize",
                color: "#6F767E",
                padding: "14px",
              }}
            >
              There are many variations of passages available but the majority
              have suffered alter humou
            </Typography>
          </Box>

          <Box
            sx={{
              background: "#FFFFFF",
              width: "307px",
              height: "320px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "52px",
                height: "52px",
                border: "2px solid black",
                background: "#6759FF",
                margin: "54px",
                marginBottom: "0px",
              }}
            ></Box>
            <Typography
              sx={{
                margin: "36px",
                marginBottom: "10px",
                width: "224px",
                height: "29px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "29px",
                textTransform: "capitalize",
                color: "#1A1B2D",
              }}
            >
              Repairing Service
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                textTransform: "capitalize",
                color: "#6F767E",
                padding: "14px",
              }}
            >
              There are many variations of passages available but the majority
              have suffered alter humou
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
