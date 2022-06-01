import React, { Component } from "react";
import axios from "axios";

export default class TopicReg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicRegs: [],
    };
  }

  componentDidMount() {
    this.retriveTopics();
  }

  retriveTopics() {
    axios.get("/topicReg").then((res) => {
      if (res.data.success) {
        this.setState({
          topicRegs: res.data.RegisteredTopics,
        });

        console.log(this.state.topicRegs);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/topicReg/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retriveTopics();
    });
  };

  filterdata(topicRegs, serchKey) {
    const result = topicRegs.filter((topicReg) =>
      topicReg.leaderName.includes(serchKey)
    );
    this.setState({ topicRegs: result });
  }

  handleSerchArea = (e) => {
    const serchKey = e.currentTarget.value;

    axios.get("/topicReg").then((res) => {
      if (res.data.success) {
        this.filterdata(res.data.RegisteredTopics, serchKey);
      }
    });
  };

  render() {
    return (
      <div className="row">
        <p className="col-lg-9 mt-2 mb-2">All Topics</p>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="serch"
            placeholder="Serch"
            name="searchQuery"
            onChange={this.handleSerchArea}
          ></input>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">mail</th>
              <th scope="col">phone</th>
              <th scope="col">courceCode</th>
              <th scope="col">startDate</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.topicRegs.map((topicRegs, index) => (
              <tr key={index}>
                <th scope="row"> {index + 1}</th>

                <td>
                  {" "}
                  <a
                    href={`/topicDetail/${topicRegs._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {topicRegs.leaderName}
                  </a>
                </td>

                <td>{topicRegs.leaderEmail}</td>
                <td>{topicRegs.leaderPhone}</td>
                <td>{topicRegs.courceCode}</td>
                <td>{topicRegs.startDate}</td>
                <td>
                  <span class="badge badge-success">{topicRegs.status}</span>
                </td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/topic/edit/${topicRegs._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(topicRegs._id)}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a
            href="/topic/add"
            style={{ textDecoration: "none", color: "white" }}
          >
            Assign Supervisor
          </a>
        </button>
      </div>
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-lg-9 mt-2 mb-2">
      //         <h3>Registered Topics</h3>
      //       </div>
      //       <div className="col-lg-3 mt-2 mb-2">
      //         <select
      //           className="form-control"
      //           type="sewrch"
      //           placeholder="Serch by User Role"
      //           name="serchQue"
      //           onChange={this.handleSerchArea}
      //         >
      //           <option value="">All Users</option>
      //           <option value="Student">Student</option>
      //           <option value="Supervisor">Supervisor</option>
      //           <option value="Co-supervisor">Co-supervisor</option>
      //           <option value="Pannel member">Pannel member</option>
      //         </select>
      //       </div>
      //       <table class="table">
      //         <thead>
      //           <tr>
      //             <th scope="col">#</th>
      //             <th scope="col">Name</th>
      //             <th scope="col">Role</th>
      //             <th scope="col">Id</th>
      //             <th scope="col">Email</th>
      //             <th scope="col">Password</th>
      //             <th scope="col">Status</th>
      //             <th scope="col">Action</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {this.state.users.map((users, index) => (
      //             <tr key={index}>
      //               <th scope="row">{index + 1}</th>
      //               <td>
      //                 <a
      //                   href={`/user/${users._id}`}
      //                   style={{ textDecoration: "none" }}
      //                 >
      //                   {users.userName}
      //                 </a>
      //               </td>

      //               <td>{users.role}</td>
      //               <td>{users.userId}</td>
      //               <td>{users.pwd}</td>
      //               <td>{users.cpwd}</td>
      //               <td>
      //                 <select>
      //                   <option value="Active">Active</option>
      //                   <option value="InActive">Inactive</option>
      //                 </select>
      //               </td>
      //               <td>
      //                 <a className="btn btn-warning" href={`/edit/${users._id}`}>
      //                   <i className="fas fa-edit"></i>&nbsp;Edit
      //                 </a>
      //                 &nbsp;
      //                 <a
      //                   className="btn btn-danger"
      //                   href="#"
      //                   onClick={() => this.onDelete(users._id)}
      //                 >
      //                   <i className="fas fa-trash-alt"></i>&nbsp;Delete
      //                 </a>
      //               </td>
      //             </tr>
      //           ))}
      //         </tbody>
      //       </table>

      //       <button className="btn btn-success">
      //         <a href="/add" style={{ textDecoration: "none", color: "white" }}>
      //           Create New User
      //         </a>
      //       </button>
      //     </div>
      //     <br></br>
      //     {this.state.users.map((users, index) => (
      //       <span>
      //         <div class="card">
      //           <h3 class="card-header" style={{ backgroundColor: "" }}>
      //             {" "}
      //             <a
      //               href={`/user/${users._id}`}
      //               style={{ textDecoration: "none" }}
      //             >
      //               {users.leaderName}
      //             </a>
      //           </h3>
      //           <div class="card-body" style={{ marginLeft: "40px" }}>
      //             <pre class="tab">
      //               <h3>
      //                 User ID {"      "}: {users.userId}
      //               </h3>
      //             </pre>
      //             <pre class="tab">
      //               <h3>Email Address : {users.pwd}</h3>
      //             </pre>
      //             <pre class="tab">
      //               <h3>
      //                 Password {"     "}: {users.cpwd}
      //               </h3>
      //             </pre>
      //             <pre class="tab">
      //               <h3>
      //                 User Role {"    "}: {users.role}
      //               </h3>
      //             </pre>
      //           </div>
      //           <a className="btn btn-warning" href={`/edit/${users._id}`}>
      //             <i className="fas fa-edit"></i>&nbsp;Edit
      //           </a>
      //           &nbsp;
      //           <a
      //             className="btn btn-danger"
      //             href="#"
      //             onClick={() => this.onDelete(users._id)}
      //           >
      //             <i className="fas fa-trash-alt"></i>&nbsp;Delete
      //           </a>
      //         </div>
      //         <hr></hr>
      //       </span>
      //     ))}
      //   </div>
    );
  }
}
