import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const Tab = styled(NavLink)`
  text-decoration: none;
`;

const Header = styled(AppBar)`
  background: #ffffff;
`;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              sx={{ color: "#6759FF" }}
              // onClick={handleClick}
            ></MenuIcon>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Box sx={{ width: "330px", height: "1000px" }}></Box>
            </Menu>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#6759FF",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Logo
          </Typography>

          <Tab
            to="/"
            sx={{
              color: "#6759FF",
              mr: 2,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              fontFamily: "Inter",
            }}
          >
            HOME
          </Tab>

          <Tab
            to="/service"
            sx={{
              color: "#6759FF",
              mr: 2,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              fontFamily: "Inter",
            }}
          >
            SERVICE
          </Tab>

          <Tab
            to="/about"
            sx={{
              color: "#6759FF",
              mr: 2,
              display: { xs: "none", sm: "block" },
              fontFamily: "Inter",
            }}
          >
            ABOUT
          </Tab>

          <Tab
            to="/dasboard"
            sx={{
              color: "#6759FF",
              mr: 2,
              display: { xs: "none", sm: "block" },
              fontFamily: "Inter",
            }}
          >
          
            BLOG
          </Tab>

          <Button
          variant="text"
            sx={{
              border:"2px solid #6759ff",
              color: "#6759FF",
              width:"100px",
              mr: 2,
              display: { xs: "none", sm: "block" },
              fontFamily: "Inter",
            }}>login</Button>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </Header>
    </Box>
  );
}
