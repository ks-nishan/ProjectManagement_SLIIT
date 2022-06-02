import React from "react";
import axios from "axios";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Typography, Table } from "@material-ui/core";
import './mathy.css'
class Topicpannel extends React.Component {
  state = {
    tittle: [],
    ufeedback: "",
    ustatus: "",
    uid: "",
  };

  getTopic = () => {
    axios.get("http://localhost:3001/topic").then((res) => {
      console.log(res);
      this.setState({ tittle: res.data });
    });
  };
  componentDidMount = () => {
    this.getTopic();
  };
  handleUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleModalUpdate = (e) => {
    axios
      .put(`http://localhost:3001/topic/update/${this.state.uid}`, {
        Status: this.state.ustatus,
        Feedback: this.state.ufeedback,
      })
      .then((res) => {
        console.log(res);
        this.setState({ ustatus: "", ufeedback: "" });
        window.location = "/topicpanel";
      });
  };
  render() {
    return (
    <>
        
          <table class="table table-bordered" style={{marginRight:"10px"}}>
            <thead class="thead-dark" id="table_head" >
              <tr>
                <th>GroupId</th>
                <th>Tittle</th>
                <th>Supervisor</th>
                <th>Cosupervisor</th>
                <th>Leader Name</th>
                <th>Leader Email</th>
                <th>Feedback</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tittle.map((tittle) => (
                <tr key={tittle._id}>
                  <td> <Typography style={{
                        
                        
                        display: "inline-block",
                      }}>{tittle.GroupId}</Typography></td>
                  <td><Typography style={{
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}>{tittle.Tittle}</Typography></td>
                  <td><Typography style={{
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}>{tittle.Supervisor}</Typography></td>
                  <td><Typography style={{
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}>{tittle.Cosupervisor}</Typography></td>
                  <td><Typography style={{
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}>{tittle.L_name}</Typography></td>
                  <td><Typography style={{
                       
                        padding: "3px 10px",
                        display: "inline-block",
                      }}>{tittle.L_email}</Typography></td>
                  <td><Typography style={{
                       
                       padding: "3px 10px",
                        display: "inline-block",
                        
                      }}>{tittle.Feedback}</Typography></td>

                  <td>
                    <h3
                      style={{
                        backgroundColor:
                          (tittle.Status === "Accepted" && "lightblue") ||
                          (tittle.Status === "Pending" && "green") ||
                          (tittle.Status === "Rejected" && "lightblue"),
                        padding: "25px , 10px",
                      }}
                    >
                    <Typography style={{
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}>{tittle.Status}</Typography>
                    </h3>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-warning"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        this.setState({
                          uid: tittle._id,
                          ustatus: tittle.Status,
                          ufeedback: tittle.Feedback,
                        });
                      }}
                    >
                     UPDATE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        

        <div class="modal fade bd-example-modal-lg" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title"></h4>
              </div>
              <div class="modal-body">
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.ustatus}
                  name="ustatus"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Status"
                />
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.ufeedback}
                  name="ufeedback"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Feedback"
                />
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-warning"
                  onClick={(e) => this.handleModalUpdate(e)}
                >
                  Update
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => {
                    this.setState({ ustatus: "", ufeedback: "" });
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        </>
    );
  }
}

export default Topicpannel;
