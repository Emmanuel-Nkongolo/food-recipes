import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import PostsCard from "../posts/PostsCard";
import { useParams } from "react-router-dom";

const CatBasedPosts = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // ${process.env.REACT_APP_API_URL}
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/categoryBasedBlogs/${id}`
        );
        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" align="center">
        Categories Page
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        {blog.map((post) => (
          <Grid item xs>
            <PostsCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={`${import.meta.env.VITE_REACT_APP_API_URL}${post.image}`}
              blogHref={`/details/${post.slug}`}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>

      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent="center"
        alignItems={"center"}
      >
        <Pagination count={10} color="warning" />
      </Stack>
    </Container>
  );
};

export default CatBasedPosts;
