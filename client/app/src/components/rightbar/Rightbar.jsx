import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import chef from "../static/chef.jpg";
import { Send as SendIcon } from "@mui/icons-material";

const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" mt={5}>
        Lorem ipsum dolor sit amet
      </Typography>
      <CardMedia
        component={"img"}
        height="300"
        image={chef}
        alt="burger_image"
        sx={{
          width: "400px",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.50s ease`,
          },
        }}
      />
      <Typography align="left" variant="body1">
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography align="left" variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, optio
        accusamus dolores <br />
        <a href="#">Read More </a>
      </Typography>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor="tomato" mt={2}>
        Follow us and share your email if you're a foodie
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField
          label="Your Email here!"
          variant="standard"
          color="warning"
        />
        <IconButton>
          <SendIcon sx={{ color: "tomato" }} />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
    </Box>
  );
};

export default Rightbar;
