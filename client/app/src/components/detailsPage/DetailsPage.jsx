import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Category from "../categoryList/Category";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const [postIngredients, setPostIngredients] = useState("");
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // ${process.env.REACT_APP_API_URL}
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/blogs/${slug}`
        );
        setBlogDetails(res.data);
        setPostIngredients(res.data.ingredients);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        {blogDetails.title}
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        Just a try so Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Vitae amet voluptas exercitationem vel quidem adipisci omnis quod
        cumque,
      </Typography>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.content}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={blogDetails.image}
          alt="Burger"
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.contentTwo}
      </Typography>
      <Typography variant="h3" align="center" m={2}>
        Ingredients
      </Typography>
      <List>
        {postIngredients.split(",").map((ingredients) => (
          <ListItemButton key={ingredients}>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={ingredients} />
          </ListItemButton>
        ))}
      </List>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.contentTwo}
      </Typography>
      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        You may also like
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
