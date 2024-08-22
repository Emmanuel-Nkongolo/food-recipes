import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PostSearch from "../search/PostSearch";
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });
  const MenuItems = [
    { Name: "Home", Link: "#" },
    { Name: "Recipes", Link: "#" },
    { Name: "About Us", Link: "#" },
    { Name: "Subscribe", Link: "#" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <AppBar color="default" position="sticky" elevation={0}>
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Link sx={{ textDecoration: "none" }} href="/">
              <Typography
                variant="h4"
                color={"tomato"}
                sx={{
                  fontFamily: "New Amsterdam, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Food Recipes
              </Typography>
            </Link>
          </Box>
          <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography
                key={item.Name}
                variant="body2"
                color={"text.primary"}
                component=""
                href={item.Link}
              >
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <Box flex={1}>
            <PostSearch />
            <MenuIcon
              sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
          <List>
            <ListItem>
              {MenuItems.map((item) => (
                <ListItemButton key={item.Name} href={item.Link}>
                  {item.Name}
                </ListItemButton>
              ))}
            </ListItem>
          </List>
          <TextField
            sx={{ display: { xs: "flex", md: "none" } }}
            color="warning"
            label="Search Here!"
            variant="outlined"
          />
        </Drawer>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: 1,
        }}
      >
        <Typography align="center" variant="h5" mr={{ xs: 0, md: 1 }}>
          Delicious Recipes made for everyone
        </Typography>
        <Typography
          variant="h5"
          color={"tomato"}
          align="center"
          sx={{ fontFamily: "New Amsterdam, sans-serif" }}
        >
          Delicious Recipes made for everyone
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
