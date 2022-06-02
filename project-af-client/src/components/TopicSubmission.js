import React from "react";
import axios from "axios";
import "./mathy.css";

class Topicsubmission extends React.Component {
  state = {
    GroupId: "",
    Status: "",
    Supervisor: "",
    Cosupervisor: "",
    Tittle: "",
    L_name: "",
    L_email: "",
    image:'',
    Description: "",
  };
  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    if (this.state.Tittle !== "" && this.state.Supervisor !== "") {
      axios.post("http://localhost:3001/topic/add", this.state).then((res) => {
        console.log("successfully posted");
        this.setState({
          GroupId: "",
          Supervisor: "",
          Cosupervisor: "",
          Tittle: "",
          L_name: "",
          L_email: "",
          image:"",
          Description: "",
        });
      });
      window.location = "/";
    }
  };
  render() {
    return (
      <div>
        <div className="container" >
          <br />

          <header>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10px",
                fontSize: "50PX",
              }}
            >
              <br/>
              <b>  <center>
                Register Your Research Topic</center></b> 
            </h2>
          </header>
        </div>

        <div
          className="center"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}
        >
          

         
          <form onSubmit={() => this.handleSubmit()} id="form">
            <div class="mb-6" >
              <label class="form-label" style={{ fontSize: "30px" }}>
                Topic
                <sup
                  className="text-danger"
                  style={{ fontSize: "10px" }}
                  id="label"
                >
                  *Required
                </sup>
              </label>
              <input
                type="topic"
                class="form-control"
                placeholder="Enter Topic"
                onChange={(e) => this.handleChange(e)}
                name="Tittle"
                value={this.state.Tittle}
                id="input_feild"
                required
              />
            </div>
            <br />
            <div class="mb-3">
              <label class="form-label" style={{ fontSize: "30px" }}>
                Group ID
                <sup className="text-danger" style={{ fontSize: "10px" }}>
                  *Required
                </sup>
              </label>
              <input
                type="university"
                class="form-control"
                placeholder="Enter group id"
                onChange={(e) => this.handleChange(e)}
                name="GroupId"
                value={this.state.GroupId}
                required
              />
            </div>
            <br />
            <div class="mb-3">
              <label class="form-label" style={{ fontSize: "30px" }}>
                Supervisor
                <sup className="text-danger" style={{ fontSize: "10px" }}>
                  *Required
                </sup>
              </label>
              <input
                type="purpose"
                class="form-control"
                placeholder="Enter supervisor name"
                onChange={(e) => this.handleChange(e)}
                name="Supervisor"
                value={this.state.Supervisor}
                required
              />
            </div>
            <br />
            <div class="mb-3">
              <label class="form-label" style={{ fontSize: "30px" }}>
                Co-Supervisor{" "}
                <sup className="text-danger" style={{ fontSize: "10px" }}>
                  *Required
                </sup>
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Co-supervisor Name"
                onChange={(e) => this.handleChange(e)}
                name="Cosupervisor"
                value={this.state.Cosupervisor}
                required
              />
            </div>
            <br />
            <div class="mb-3">
              <label class="form-label" style={{ fontSize: "30px" }}>
                Leader Name{" "}
                <sup className="text-danger" style={{ fontSize: "10px" }}>
                  *Required
                </sup>
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Leader Name"
                onChange={(e) => this.handleChange(e)}
                name="L_name"
                value={this.state.L_name}
                
                required
              />
            </div>
            <br />
            <div class="mb-3">
              <label class="form-label" style={{ fontSize: "30px" }}>
                Leader's Email Address
                <sup className="text-danger" style={{ fontSize: "10px" }}>
                  *Required
                </sup>
              </label>
              <input
                type="team_leader"
                class="form-control"
                placeholder="Enter Email Address"
                onChange={(e) => this.handleChange(e)}
                name="L_email"
                value={this.state.L_email}
                required
                pattern="[a-zA-Z0-9._-]*@[a-zA-Z]*\.[a-zA-Z]{2,3}"
              />
            </div>
            <br />
            <div class="mb-3">
              <label class="form-label" style={{ fontSize: "30px" }}>
                Description
              </label>
              <br />
              <textarea
                type="team_leader"
                class="form-control"
                placeholder="Enter The Description"
                onChange={(e) => this.handleChange(e)}
                name="Description"
                value={this.state.Description}
                id="textarea"
                required
              >
                
              </textarea>
            </div>

            <br />
            <label class="uploadLabel">
              <input type="file" class="uploadButton"  name="image"onChange={(e) => this.handleChange(e)} value={this.state.image}/>
            </label>
            <div className="text-end pr-4">
              <center>
                <button
                  type="submit"
                  className="btn btn-dark btn-block mb-2"
                  id="button"
                >
                  Submit <i className="fas fa-angle-double-right"></i>
                </button>
              </center>
            </div>
          </form>
        
          <br/><br/><br/>
          
        </div>
      </div>
    );
  }
}
export default Topicsubmission;
