import { Box, Typography } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useProductData } from "../Hooks/useProductData";
import { Link, useParams } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Product = () => {
  const id = useParams();

  const onSuccess = (data) => {
    // console.log(`api success after  data fetching`, data);
  };
  const onError = (error) => {
    console.log(`api encounter before  data fetching`, error);
  };
  // refech
  const { isLoading, data, isError, error, isFetching } = useProductData(
    onSuccess,
    onError
  );

  // let formData = new FormData();
  // formData.append("email", data.email);
  // formData.append("password", password);
  // formData.append("device", device);

  // mutate{(formData)=>{
  //  onSuccess:{
  //   if(!data?.data?.status){
  //     let errormsg = data?.message
  //   }
  //   let success =
  //  }
  // }}

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const Products = data?.data?.data;
  // console.log(Products);
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Typography
        sx={{
          textAlign: "center",

          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "55px",
          lineHeight: "50px",
          textAlign: "center",
          color: "#121212",
          marginBottom: "60px",
        }}
      >
        All Our Product
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={9}>
          {Products?.map((P) => {
            return (
              <Grid item xs={3} key={P?.id}>
                <Link to={`/product-details/${P?.id}`}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={P?.thumbnail_image}
                        alt="img"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          textAlign={"center"}
                        >
                          {P?.product_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {P?.product_description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
