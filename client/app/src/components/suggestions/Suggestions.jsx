import { Box, Stack, styled, Typography } from "@mui/material";
import drinks from "../static/drinks.jpg";
import cookies from "../static/cookies.jpg";
import pasta from "../static/pasta1.jpg";
import pancakes from "../static/pancakes.jpg";
import soup from "../static/soup.jpg";

const Suggestions = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
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
      justifyContent="center"
      alignItems={"center"}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ overflow: "auto" }}
    >
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${cookies})` }} />
        <StyledTypography>Cookies</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${drinks})` }} />
        <StyledTypography>Drinks</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${pasta})` }} />
        <StyledTypography>Dinner</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${soup})` }} />
        <StyledTypography>Soup</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${pancakes})` }} />
        <StyledTypography>Pancakes</StyledTypography>
      </CardBox>
    </Stack>
  );
};

export default Suggestions;
