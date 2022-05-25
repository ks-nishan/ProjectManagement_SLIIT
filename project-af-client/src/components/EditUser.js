import React, { Component } from "react";
import axios from "axios";

export default class EditUser extends Component {
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
    const id = this.props.match.params.id;
    const { userName, userId, role, pwd, cpwd } = this.state;

    const data = {
      userName: userName,
      userId: userId,
      role: role,
      pwd: pwd,
      cpwd: cpwd,
    };

    console.log(data);

    axios.put(`/user/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("User Updated Successfully");
        this.setState({
          userName: "",
          userId: "",
          role: "",
          pwd: "",
          cpwd: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/user/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          userName: res.data.user.userName,
          userId: res.data.user.userId,
          role: res.data.user.role,
          pwd: res.data.user.pwd,
          cpwd: res.data.user.cpwd,
        });

        console.log(this.state.user);
      }
      console.log("Fail");
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h3 className="h3 mb-3 font-weight-normal">Edit new user</h3>
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
            {/* <input
              type="text"
              className="form-control"
              id="role"
              name="role"
              value={this.state.role}
              onChange={this.handleInputChange}
              placeholder="Enter User Role"
            ></input> */}
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
            <label for="pwd">Email </label>
            <input
              type="text"
              className="form-control"
              id="pwd"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleInputChange}
              placeholder="Password"
            ></input>
          </div>
          <div className="form-group">
            <label for="cpwd"> Password</label>
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
            Update
          </button>
        </form>
      </div>
    );
  }
}
