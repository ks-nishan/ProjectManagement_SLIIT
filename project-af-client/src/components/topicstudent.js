import React from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
class Topicstudent extends React.Component {
  state = {
    tittle: [],
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
  render() {
    return (
      <div class="container">
        <div
          class="container bcontent"
          style={{
            borderRadius: "10px",
           
        
            display: "inline-block",
          
            fontWeight: "unset",
          }}
        >
          <br/>
          <table class="table table-bordered" id="table_div" style={{ border: "7px" }}>
            <thead
              className="thead-dark"
             
              id="table_head"
            >
              <tr>
                <th>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      padding: "3px 10px",
                      display: "inline-block",
                    }}
                  ></Typography>
                  GroupId
                </th>
                <th>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                      padding: "3px 10px",
                      display: "inline-block",
                    }}
                  ></Typography>
                  Tittle
                </th>
                <th>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                      padding: "3px 10px",
                      display: "inline-block",
                    }}
                  ></Typography>
                  Feedback
                </th>
                <th>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                      padding: "3px 10px",
                      display: "inline-block",
                    }}
                  ></Typography>
                  Status
                </th>
              </tr>
            </thead>
            <tbody id="table_body">
              {this.state.tittle.map((tittle) => (
                <tr key={tittle._id}>
                  <td>
                    <Typography
                      style={{
                       
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}
                    >
                      {tittle.GroupId}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      style={{
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}
                    >
                      {tittle.Tittle}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      style={{
                        
                        padding: "3px 10px",
                        display: "inline-block",
                      }}
                    >
                      {tittle.Feedback}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      style={{
                        backgroundColor:
                          (tittle.Status === "Accepted" && "green") ||
                          (tittle.Status === "Pending" && "orange") ||
                          (tittle.Status === "Rejected" && "Red"),
                        display: "inline-block",
                        borderRadius: "8",
                        
                        color: "white",
                        
                        padding: "3px 10px",
                      }}
                    >
                      {tittle.Status}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Topicstudent;
