import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import PostsCard from "../posts/PostsCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: 600,
  minHeight: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [postSearch, setPostSearch] = React.useState([]);
  const [lookup, setLookup] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      // ${process.env.REACT_APP_API_URL}
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/blogs/`
        );
        setPostSearch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <TextField
        sx={{ display: { xs: "none", md: "flex" } }}
        color="warning"
        label="Search Here!"
        variant="standard"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ display: { xs: "none", md: "flex" } }}
            color="warning"
            label="Search Here!"
            variant="standard"
            onChange={(e) => setLookup(e.target.value)}
          />
          {postSearch
            .filter((search) => search.title.toLowerCase().includes(lookup))
            .map((search) =>
              lookup.length > 0 ? (
                <Grid item xs>
                  <PostsCard
                    key={search.id}
                    title={search.title}
                    excerpt={search.excerpt}
                    image={search.image}
                    blogHref={`/details/${search.slug}`}
                    myDirection={"flex"}
                  />
                </Grid>
              ) : (
                ""
              )
            )}
        </Box>
      </Modal>
    </div>
  );
}
