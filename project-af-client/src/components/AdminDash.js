import React from "react";
import { TextField } from "@material-ui/core";
import logo from "../images/SLIIT_Logo.png";

function Login2() {
  return (
    <div style={{ background: logo }}>
      <div className="icon">
        <div className="icon_class"></div>
        <h2>Admin Dashboad</h2>
      </div>

      <div class="row">
        <img
          class="card-img-top"
          src={logo}
          style={{ height: "300px", width: "300px", marginTop: "60px" }}
        />

        <div class="col-sm-6">
          <div class="card" style={{ marginLeft: "100px", marginTop: "60px" }}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/add" class="btn btn-primary">
                Add New User
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
