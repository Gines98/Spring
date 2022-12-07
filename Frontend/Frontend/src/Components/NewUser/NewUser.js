import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../HeaderBar/HeaderBar";
import Footer from "../Footer/Footer";
import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createUser } from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

export default function Fondo() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    createUser(user);
    navigate("/");
  };

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Divider>
        <h2>Create User</h2>
      </Divider>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="m"
          sx={{
            marginTop: "1%",
            bgcolor: "#0000",
            height: "80vh",
            width: "100vh",
            textlign: "center",
          }}
        >
          <TextField
            fullWidth
            id="outlined-textarea"
            label="ID"
            multiline
            onChange={handleChange}
            name="id"
          />

          <br></br>
          <br></br>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="First name"
            multiline
            onChange={handleChange}
            name="firstName"
          />

          <br></br>
          <br></br>
          <TextField
            id="outlined-multiline-static"
            label="Last name"
            multiline
            fullWidth
            onChange={handleChange}
            name="lastName"
          />

          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Phone number"
            multiline
            fullWidth
            onChange={handleChange}
            name="phoneNumber"
          />
          <br></br>
          <br></br>

          <TextField
            id="outlined-multiline-static"
            label="Email"
            multiline
            fullWidth
            onChange={handleChange}
            name="email"
          />
          <br></br>
          <br></br>

          <Button variant="contained" onClick={handleSubmit} fullWidth>
            POST USER
          </Button>
        </Container>
      </React.Fragment>

      <Footer></Footer>
    </div>
  );
}
