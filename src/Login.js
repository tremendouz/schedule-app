import React, { useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import "./Login.css";
import { AuthConsumer } from "./AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const useStyles = makeStyles({
    input: {
      marginBottom: 30
    }
  });

  const classes = useStyles();

  const params = {
    username: username,
    password: password,
    grant_type: "password"
  };

  return (
    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        <div className="wrapper">
          <TextField
            className={classes.input}
            label="Username"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            className={classes.input}
            label="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => login(params)}
          >
            Login
          </Button>
        </div>
      )}
    </AuthConsumer>
  );
};

export default Login;
