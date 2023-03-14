import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import abt from "../Images/abt.png"
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
export default function About() {
  return (

      
      <Container  maxWidth="xl">
           <Grid container>
                  <Grid item lg={6} sm={12}>
                  <Box 
                   style={{
                    backgroundImage: `url(${abt})`,
                    backgroundSize: "cover",
                    height: "592px",
                    color: "#f5f5f5",
                    }}></Box>
                   </Grid>


                 <Grid item lg={6} sm={12}>

                 <Box sx={{marginLeft:"20px"}}>
                    <Typography sx={{
                    // width: "605px",
                    height: "100px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "500",
                     fontSize: "38px",
                    lineHeight: "50px",
                    color: "#121212",
                    marginBottom:{xs:"95px",lg:"0px"}
                    }}>
                        WE ARE MOST POPULAR REPAIR COMPANY
                    </Typography>
                    <Typography sx={{fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "190.9%",
                    color: "#6F767E"}}>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus,
                        </Typography>



                    <Grid container>
                    <Grid item lg={2}  sm={6}>
                     <Box>
                    <Typography sx={{
                      width: "45px",
                      height: "39px",
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: "800",
                       fontSize: "32px",
                       lineHeight: "39px",
                      color: "#6759FF"}}>
                       80
                     </Typography>
                     <Typography
                      sx={{
                    width: "115px",
                     height: "58px",
                     fontFamily: 'Inter',
                     fontStyle: "normal",
                      fontWeight: "500",
                     fontSize: "18px",
                       lineHeight: "156%",
                     color: "#6F767"}}>
                    Member Professional
                   </Typography>
                   </Box>
                   </Grid>
                 <Grid item lg={2}  sm={6}>
                  <Box>
                 <Typography sx={{
                 width: "45px",
                 height: "39px",
                 fontFamily: 'Inter',
                 fontStyle: "normal",
                 fontWeight: "800",
                  fontSize: "32px",
                  lineHeight: "39px",
                  color: "#6759FF"}}>
                    80
                   </Typography>

                   <Typography
                   sx={{
                   width: "115px",
                   height: "58px",
                   fontFamily: 'Inter',
                   fontStyle: "normal",
                   fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "156%",
                    color: "#6F767"}}>Member Professional </Typography></Box>
                  </Grid>

                 <Grid item lg={2}  sm={6}>
                 <Box>
                <Typography sx={{
                 width: "45px",
                 height: "39px",
                 fontFamily: 'Inter',
                 fontStyle: "normal",
                 fontWeight: "800",
                  fontSize: "32px",
                  lineHeight: "39px",
                 color: "#6759FF"}}>
                     80
                   </Typography>
                  <Typography
                    sx={{
                   width: "115px",
                   height: "58px",
                   fontFamily: 'Inter',
                   fontStyle: "normal",
                   fontWeight: "500",
                   fontSize: "18px",
                   lineHeight: "156%",
                  color: "#6F767"}}>Member Professional </Typography></Box>
                   </Grid>


                 <Grid item lg={2} sm={6}>
                   <Box>
                 <Typography sx={{
                  width: "45px",
                  height: "39px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "32px",
                  lineHeight: "39px",
                  color: "#6759FF"}}>
                   80
                </Typography>
                 <Typography
                 sx={{
                width: "115px",
                height: "58px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "156%",
                 color: "#6F767"}}>Member Professional </Typography></Box>
                </Grid>

                </Grid>
                </Box>


                   <Box>
                   <Button sx={{margin:"20px",marginTop:"50px", background:" #6759FF",
}} variant="contained">Learn more</Button>
                   </Box>

                  </Grid>
            
                   </Grid>
                   </Container>

              );
              }
