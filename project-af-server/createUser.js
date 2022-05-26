import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userId: "",
      role: "",
      pwd: "",
      cpwd: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { userName, userId, role, pwd, cpwd } = this.state;

    const data = {
      userName: userName,
      userId: userId,
      role: role,
      pwd: pwd,
      cpwd: cpwd,
    };

    console.log(data);

    axios.post("/user/create", data).then((res) => {
      if (res.data.success) {
      }
      this.setState({
        userName: "",
        userId: "",
        role: "",
        pwd: "",
        cpwd: "",
      });
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h3 className="h3 mb-3 font-weight-normal">Create new user</h3>
        <form>
          <div className="form-group">
            <label for="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={this.state.userName}
              onChange={this.handleInputChange}
              placeholder="Enter User Name"
            ></input>
            {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
          </div>

          <div className="form-group">
            <label for="role">Role</label>
            <select
              class="form-control"
              id="role"
              name="role"
              value={this.state.role}
              onChange={this.handleInputChange}
            >
              <option>Student</option>
              <option>Supervisor</option>
              <option>Co-supervisor</option>
              <option>Pannel member</option>
            </select>
          </div>
          <div className="form-group">
            <label for="userId">User ID</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              name="userId"
              value={this.state.userId}
              onChange={this.handleInputChange}
              placeholder="Enter User ID"
            ></input>
          </div>
          <div className="form-group">
            <label for="pwd">Email</label>
            <input
              type="text"
              className="form-control"
              id="pwd"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleInputChange}
              placeholder="Email Address"
            ></input>
          </div>
          <div className="form-group">
            <label for="cpwd">Password</label>
            <input
              type="password"
              className="form-control"
              id="cpwd"
              name="cpwd"
              value={this.state.cpwd}
              onChange={this.handleInputChange}
              placeholder="Password"
            ></input>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}




------------------login.js----------------
import React, { Component } from "react";
import { CardContent, Grid, TextField } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { Button } from "bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.role = "";
    this.navigate = "";
  }

  findRole() {
    if (this.role === "Student") {
      this.navigate = "/";
    }
    return this.navigate;
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "#FFFF00",
        }}
      >
        <Card
          style={{
            width: "550px",
            height: "450px",
          }}
        >
          <CardContent>
            <div className="icon">
              <div className="icon_class"></div>
              <h3 className="text text-center">Sign In</h3>
            </div>

            <div className="row m-4">
              <div className="col-12">
                <TextField
                  id="firstName"
                  type="text"
                  variant="outlined"
                  label="Enter Email Address"
                  fullWidth
                />
              </div>
            </div>
            <div className="row m-4">
              <div className="col-12">
                <TextField
                  id=""
                  type="password"
                  variant="outlined"
                  label="Enter Password"
                  fullWidth
                />
              </div>
            </div>
            <div className="row m-4">
              <div className="col-12">
                <select
                  style={{
                    height: "45px",
                    width: "100%",
                  }}
                >
                  <option>Select Role</option>
                  <option>Student</option>
                  <option>Supervisor</option>
                  <option>Co-Supervisor</option>
                  <option>Pannel-Member</option>
                </select>
              </div>
            </div>
            <div className="row m-2">
              <button
                type="submit"
                className="btn btn-success"
                style={{
                  height: "45px",
                  width: "100%",
                  margin: "30px",
                }}
              >
                <a
                  class="font-weight-bold"
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign In
                </a>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

