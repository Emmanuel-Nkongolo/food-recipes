import { Box, Container, Link, Stack, styled, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Category = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // ${process.env.REACT_APP_API_URL}
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/category/`
        );
        setCat(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
    overflow: "hidden",
    width: "100px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));
  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });
  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
    <Stack
      Container
      direction={"row"}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ overflow: "auto" }}
    >
      {cat.map((category) => (
        <Link href={`category/${category.id}`} sx={{ textDecoration: "none" }}>
          <CardBox key={category.id}>
            <StyledCard sx={{ backgroundImage: `url(${category.image})` }} />
            <StyledTypography>{category.name}</StyledTypography>
          </CardBox>
        </Link>
      ))}
    </Stack>
  );
};

export default Category;
