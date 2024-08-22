import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Rightbar from "../rightbar/Rightbar";
import Posts from "../posts/Posts";
import Hero from "../hero/Hero";

const Main = () => {
  return (
    <>
      <Hero />
      <Container>
        <Stack direction={"row"} spacing={1} mt={3}>
          <Box flex={3}>
            <Posts />
          </Box>
          <Box flex={1} display={{ xs: "none", md: "block" }}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Main;
