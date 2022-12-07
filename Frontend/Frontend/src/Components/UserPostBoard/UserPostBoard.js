import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Footer from "../Footer/Footer";
import { getAllUsers } from "../../Services/UserService";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UserPostBoard() {
  const style = {
    width: "100%",
    align: "center",
    bgcolor: "black",
    color: "white",
  };
  const [userPosts, setUserPosts] = React.useState([]);

  React.useEffect(() => {
    getAllUsers().then((data) => setUserPosts(data));
  }, []);

  const printData = () => {
    console.log(userPosts);
  };

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="m"
          sx={{
            marginTop: "5%",
            bgcolor: "#ffff",
            height: "80vh",
            width: "100vh",
            textlign: "center",
          }}
        >
          <List
            fullwidth="true"
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            {userPosts.map((userPost) => (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={userPost.firstName}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {userPost.lastName}
                        </Typography>
                        {" - " + userPost.email}
                        {" - " + userPost.phoneNumber}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
          <br></br>
          <br></br>
          <Link href="/user" underline="hover">
            <Button
              variant="contained"
              sx={style}
              onClick={printData}
              fullWidth
            >
              CREATE NEW USER
            </Button>
          </Link>
        </Container>
      </React.Fragment>
      <Footer></Footer>
    </div>
  );
}
