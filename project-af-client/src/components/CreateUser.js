import React, { Component } from "react";
import axios from "axios";
import { CardContent, Grid, TextField } from "@material-ui/core";
import { IconButton, Button } from "@mui/material";
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
      alert("User created");
    });
  };

  render() {
    return (
      <div className="container mt-5 mb-5 col-10 col-sm-8 com-md-6">
        <h3 className="text-center mb-5 alert alert-warning">
          Create new user
        </h3>
        <form className="was-validated" novalidate>
          <div className="form-group">
            <label for="userName" class="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={this.state.userName}
              onChange={this.handleInputChange}
              placeholder="Enter User Name"
              required
            ></input>
            <div class="valid-feedback font-weight-bold">Valid.</div>
            <div class="invalid-feedback font-weight-bold">
              Please fill out this field.
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="role">Role</label>
              <select
                class="form-control"
                id="role"
                name="role"
                value={this.state.role}
                onChange={this.handleInputChange}
                required
              >
                <option>Student</option>
                <option>Supervisor</option>
                <option>Co-supervisor</option>
                <option>Pannel member</option>
              </select>
              <div class="valid-feedback font-weight-bold">Valid.</div>
              <div class="invalid-feedback font-weight-bold">
                Please fill out this field.
              </div>
            </div>

            <div className="form-group col-md-6">
              <label for="userId">User ID</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                value={this.state.userId}
                onChange={this.handleInputChange}
                placeholder="Enter User ID"
                required
                pattern=".{10}"
              ></input>
              <div class="valid-feedback font-weight-bold">Valid.</div>
              <div class="invalid-feedback font-weight-bold">
                Please fill out this field.
              </div>
            </div>
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
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            ></input>
            <div class="valid-feedback font-weight-bold">Valid.</div>
            <div class="invalid-feedback font-weight-bold">
              Please fill out this field.
            </div>
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
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            ></input>
            <div class="valid-feedback font-weight-bold">Valid.</div>
            <div class="invalid-feedback font-weight-bold">
              Please fill out this field.
            </div>
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
          <div className="text-right mt-4">
            <button
              variant="contained"
              type="submit"
              className="btn btn-warning font-weight-bold"
              onClick={this.onSubmit}
              style={{ width: "200px", textDecoration: "none", color: "white" }}
            >
              Submit
            </button>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}
