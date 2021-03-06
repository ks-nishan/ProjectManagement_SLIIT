import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.retriveUsers();
  }

  retriveUsers() {
    axios.get("/user").then((res) => {
      if (res.data.success) {
        this.setState({
          users: res.data.existingUsers,
        });

        console.log(this.state.users);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/user/delete/${id}`).then((res) => {
      alert("User Delete Successfully");
      this.retriveUsers();
    });
  };

  filterdata(users, serchKey) {
    const result = users.filter((user) => user.role.includes(serchKey));
    this.setState({ users: result });
  }

  handleSerchArea = (e) => {
    const serchKey = e.currentTarget.value;

    axios.get("/user").then((res) => {
      if (res.data.success) {
        this.filterdata(res.data.existingUsers, serchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h3>System Users</h3>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <select
              className="form-control"
              type="sewrch"
              placeholder="Serch by User Role"
              name="serchQue"
              onChange={this.handleSerchArea}
            >
              <option value="">All Users</option>
              <option value="Student">Student</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Co-supervisor">Co-supervisor</option>
              <option value="Pannel member">Pannel member</option>
            </select>
          </div>
          {/* <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((users, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={`/user/${users._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {users.userName}
                    </a>
                  </td>

                  <td>{users.role}</td>
                  <td>{users.userId}</td>
                  <td>{users.pwd}</td>
                  <td>{users.cpwd}</td>
                  <td>
                    <select>
                      <option value="Active">Active</option>
                      <option value="InActive">Inactive</option>
                    </select>
                  </td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${users._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(users._id)}
                    >
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}

          {/* <button className="btn btn-success">
            <a href="/add" style={{ textDecoration: "none", color: "white" }}>
              Create New User
            </a>
          </button> */}
        </div>
        <br></br>
        {this.state.users.map((users, index) => (
          <span>
            <div class="card">
              <h3 class="card-header" style={{ backgroundColor: "" }}>
                {" "}
                <a
                  href={`/user/${users._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {users.userName}
                </a>
              </h3>
              <div class="card-body" style={{ marginLeft: "40px" }}>
                <pre class="tab">
                  <h3>
                    User ID {"      "}: {users.userId}
                  </h3>
                </pre>
                <pre class="tab">
                  <h3>Email Address : {users.pwd}</h3>
                </pre>
                <pre class="tab">
                  <h3>
                    Password {"     "}: {users.cpwd}
                  </h3>
                </pre>
                <pre class="tab">
                  <h3>
                    User Role {"    "}: {users.role}
                  </h3>
                </pre>
              </div>
              <a className="btn btn-warning" href={`/edit/${users._id}`}>
                <i className="fas fa-edit"></i>&nbsp;Edit
              </a>
              &nbsp;
              <a
                className="btn btn-danger"
                href="#"
                onClick={() => this.onDelete(users._id)}
              >
                <i className="fas fa-trash-alt"></i>&nbsp;Delete
              </a>
            </div>
            <hr></hr>
          </span>
        ))}
      </div>
    );
  }
}
