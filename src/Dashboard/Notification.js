import React from "react";
import Sidebar from "./Sidebar";
import { styled, Box } from "@mui/material";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Notification = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "50px" }}>
          {/* <DrawerHeader /> */}
          <h1>Notification</h1>
        </Box>
      </Box>
    </>
  );
};

export default Notification;
