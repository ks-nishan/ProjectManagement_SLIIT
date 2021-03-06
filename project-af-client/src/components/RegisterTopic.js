import React, { Component } from "react";
import axios from "axios";

export default class RegisterTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaderName: "",
      leaderEmail: "",
      leaderPhone: "",
      accadamicYear: "",
      faculty: "",
      studyLevel: "",
      startDate: "",
      endDate: "",
      courceCode: "",
      supervisorName: "",
      supervisorEmail: "",
      remarks: "",
      status: "",
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
    const {
      leaderName,
      leaderEmail,
      leaderPhone,
      accadamicYear,
      faculty,
      studyLevel,
      startDate,
      endDate,
      courceCode,
      supervisorName,
      supervisorEmail,
      remarks,
      status,
    } = this.state;

    const data = {
      leaderName: leaderName,
      leaderEmail: leaderEmail,
      leaderPhone: leaderPhone,
      accadamicYear: accadamicYear,
      faculty: faculty,
      studyLevel: studyLevel,
      startDate: startDate,
      endDate: endDate,
      courceCode: courceCode,
      supervisorName: supervisorName,
      supervisorEmail: supervisorEmail,
      remarks: remarks,
      status: status,
    };

    console.log(data);

    axios.post("/topicReg/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          leaderName: "",
          leaderEmail: "",
          leaderPhone: "",
          accadamicYear: "",
          faculty: "",
          studyLevel: "",
          startDate: "",
          endDate: "",
          courceCode: "",
          supervisorName: "",
          supervisorEmail: "",
          remarks: "",
          status: "",
        });
      }
      alert("Success");
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h3 className="text-center mb-5 alert alert-primary">Create Topic</h3>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="userName">Leader Name</label>
              <input
                type="text"
                className="form-control"
                id="leaderName"
                name="leaderName"
                value={this.state.leaderName}
                onChange={this.handleInputChange}
                placeholder="Mr.R.Muththu"
              ></input>
              {/* <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small> */}
            </div>

            <div className="form-group col-md-6">
              <label for="role">Leader Email</label>
              <input
                type="text"
                className="form-control"
                id="leaderEmail"
                name="leaderEmail"
                value={this.state.leaderEmail}
                onChange={this.handleInputChange}
                placeholder="nisha123@gmail.com"
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="userId">Leader Phone</label>
              <input
                type="text"
                className="form-control"
                id="leaderPhone"
                name="leaderPhone"
                value={this.state.leaderPhone}
                onChange={this.handleInputChange}
                placeholder="0771234567"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label for="accadamicYear">Accadamic Year </label>
              {/* <input
                type="text"
                className="form-control"
                id="accadamicYear"
                name="accadamicYear"
                value={this.state.accadamicYear}
                onChange={this.handleInputChange}
                placeholder="accadamicYear"
              ></input> */}
              <select
                className="form-control"
                id="accadamicYear"
                name="accadamicYear"
                value={this.state.accadamicYear}
                onChange={this.handleInputChange}
              >
                <option>-----Select-----</option>
                <option>Y3S2</option>
                <option>Y4S1</option>
                <option>Y4S2</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="faculty"> Faculty</label>
              {/* <input
                type="text"
                className="form-control"
                id="faculty"
                name="faculty"
                value={this.state.faculty}
                onChange={this.handleInputChange}
                placeholder="Password"
              ></input> */}
              <select
                className="form-control"
                id="faculty"
                name="faculty"
                value={this.state.faculty}
                onChange={this.handleInputChange}
              >
                <option>-----Select-----</option>
                <option>Faculty of Computing(FOC)</option>
                <option>Faculty of Engineering(FOE)</option>
                <option>SLIIT Bussiness School</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="studyLevel"> Study Level</label>
              <input
                type="text"
                className="form-control"
                id="studyLevel"
                name="studyLevel"
                value={this.state.studyLevel}
                onChange={this.handleInputChange}
                placeholder="BSc(Hons)"
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="startDate"> Start Date</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleInputChange}
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group col-md-4">
              <label for="endDate"> End Date</label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                value={this.state.endDate}
                onChange={this.handleInputChange}
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group col-md-4">
              <label for="courceCode"> Cource Code</label>
              <input
                type="text"
                className="form-control"
                id="courceCode"
                name="courceCode"
                value={this.state.courceCode}
                onChange={this.handleInputChange}
                placeholder="SE3040"
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="supervisorName"> Supervisor Name</label>
              <input
                type="text"
                className="form-control"
                id="supervisorName"
                name="supervisorName"
                value={this.state.supervisorName}
                onChange={this.handleInputChange}
                placeholder="Mr.K.Nishanthan"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label for="supervisorEmail"> Supervisor Email</label>
              <input
                type="text"
                className="form-control"
                id="supervisorEmail"
                name="supervisorEmail"
                value={this.state.supervisorEmail}
                onChange={this.handleInputChange}
                placeholder="nisha123@gmail.com"
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label for="remarks"> Topic</label>
            <input
              type="textarea"
              className="form-control"
              id="remarks"
              name="remarks"
              value={this.state.remarks}
              onChange={this.handleInputChange}
              placeholder="Your Topic"
            ></input>
          </div>
          {/* <div className="form-group">
            <label for="status"> status</label>
            <input
              type="textarea"
              className="form-control"
              id="status"
              name="status"
              value={this.state.status}
              onChange={this.handleInputChange}
              placeholder="remarks"
            ></input>
          </div> */}
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
            variant="contained"
            type="submit"
            className="btn btn-primary font-weight-bold"
            onClick={this.onSubmit}
            style={{ width: "200px", textDecoration: "none", color: "white" }}
          >
            Submit
          </button>
        </form>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
