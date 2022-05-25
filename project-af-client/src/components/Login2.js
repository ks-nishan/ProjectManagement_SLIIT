import React from "react";
import { TextField } from "@material-ui/core";

function Login2() {
  return (
    <div>
      <div className="icon">
        <div className="icon_class"></div>
        <div className="text">Sign Up</div>
      </div>

      <div className="row">
        <div className="col-6">
          <TextField
            id="firstName"
            type="text"
            variant="outlined"
            label="Enter First Name"
            fullWidth
          />
        </div>
        <div className="col-6"></div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Login2;
