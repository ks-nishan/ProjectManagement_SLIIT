import React, { Component, useState } from "react";
import { CardContent, Grid, TextField } from "@material-ui/core";

import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mt-5 mb-5 col-10 col-sm-8 com-md-6">
      <div className="text-center mb-5 alert alert-primary">
        <label htmlFor="" className="h2">
          Login
        </label>
      </div>

      <div className="form-group">
        <TextField
          size="normal"
          variant="outlined"
          className="form-control"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <FormControl variant="outlined" size="normal" className="form-control">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment>
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div>
        <select style={{ width: "100%", height: "50px" }} id="role" name="role">
          <option value="Admin">Admin</option>
          <option value="Student">Student</option>
          <option value="Supervisoe">Supervisoe</option>
          <option value="Co-Supervisor">Co-Supervisor</option>
          <option value="Pannel member">Pannel member</option>
        </select>
      </div>
      <div className="text-right mt-4">
        <Button
          variant="contained"
          disabled={!email || !password}
          style={{ width: "200px" }}
        >
          <a
            class="font-weight-bold"
            href="/dashboad"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign In
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Login;
