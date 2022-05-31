import React, { Component } from "react";
import axios from "axios";

export default class EditTopic extends Component {
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
    const id = this.props.match.params.id;
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

    axios.put(`/topic_reg/update/${id}`, data).then((res) => {
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
      alert("Successfully updated");
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    axios.get(`/topic_Reg/${id}`).then((res) => {
      if (res.data.success) {
        console.log(res.data.topicReg);
        this.setState({
          leaderName: res.data.topicRegs.leaderName,
          leaderEmail: res.data.topicRegs.leaderEmail,
          leaderPhone: res.data.topicRegs.leaderPhone,
          accadamicYear: res.data.topicRegs.accadamicYear,
          faculty: res.data.topicRegs.faculty,
          studyLevel: res.data.topicRegs.studyLevel,
          startDate: res.data.topicRegs.startDate,
          endDate: res.data.topicRegs.endDate,
          courceCode: res.data.topicRegs.courceCode,
          supervisorName: res.data.topicRegs.supervisorName,
          supervisorEmail: res.data.topicRegs.supervisorEmail,
          remarks: res.data.topicRegs.remarks,
          status: res.data.topicRegs.status,
        });
        console.log(this.state.topicReg);
      }
      console.log("Faild");
      console.log(res.data);
      // this.setState({
      //   leaderName: res.data.topicRegs.leaderName,
      //   leaderEmail: res.data.topicRegs.leaderEmail,
      // });
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h3 className="h3 mb-3 font-weight-normal">Edit Topic</h3>
        <form>
          <div className="form-group">
            <label for="status"> status</label>
            {/* <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              value={this.state.status}
              onChange={this.handleInputChange}
              placeholder="status"
            ></input> */}
            <select
              className="form-control"
              id="status"
              name="status"
              value={this.state.status}
              onChange={this.handleInputChange}
            >
              <option>Under review</option>
              <option>Accepted</option>
              <option>Waiting</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* <div className="form-group">
            <label for="remarks"> Topic</label>
            <input
              type="text"
              className="form-control"
              id="remarks"
              name="remarks"
              value={this.state.remarks}
              onChange={this.handleInputChange}
              placeholder="remarks"
            ></input>
          </div> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="userName">User Name</label>
              <input
                type="text"
                className="form-control"
                id="leaderName"
                name="leaderName"
                value={this.state.leaderName}
                onChange={this.handleInputChange}
                placeholder="Enter User Name"
                disabled
              ></input>
              {/* <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small> */}
            </div>

            <div className="form-group col-md-6">
              <label for="role">leaderEmail</label>
              <input
                type="text"
                className="form-control"
                id="leaderEmail"
                name="leaderEmail"
                value={this.state.leaderEmail}
                onChange={this.handleInputChange}
                placeholder="Enter User Email"
                disabled
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="userId">leaderPhone</label>
              <input
                type="text"
                className="form-control"
                id="leaderPhone"
                name="leaderPhone"
                value={this.state.leaderPhone}
                onChange={this.handleInputChange}
                placeholder="Enter Phone number"
                disabled
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label for="accadamicYear">accadamicYear </label>
              <input
                type="text"
                className="form-control"
                id="accadamicYear"
                name="accadamicYear"
                value={this.state.accadamicYear}
                onChange={this.handleInputChange}
                placeholder="accadamicYear"
                disabled
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="faculty"> faculty</label>
              <input
                type="text"
                className="form-control"
                id="faculty"
                name="faculty"
                value={this.state.faculty}
                onChange={this.handleInputChange}
                placeholder="Password"
                disabled
              ></input>
            </div>

            <div className="form-group col-md-6">
              <label for="studyLevel"> studyLevel</label>
              <input
                type="text"
                className="form-control"
                id="studyLevel"
                name="studyLevel"
                value={this.state.studyLevel}
                onChange={this.handleInputChange}
                placeholder="Password"
                disabled
              ></input>
            </div>
          </div>
          <div className="form-row ">
            <div className="form-group col-md-4">
              <label for="startDate"> startDate</label>
              <input
                type="text"
                className="form-control"
                id="startDate"
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleInputChange}
                placeholder="Password"
                disabled
              ></input>
            </div>
            <div className="form-group col-md-4">
              <label for="endDate"> endDate</label>
              <input
                type="text"
                className="form-control"
                id="endDate"
                name="endDate"
                value={this.state.endDate}
                onChange={this.handleInputChange}
                placeholder="Password"
                disabled
              ></input>
            </div>
            <div className="form-group col-md-4">
              <label for="courceCode"> courceCode</label>
              <input
                type="text"
                className="form-control"
                id="courceCode"
                name="courceCode"
                value={this.state.courceCode}
                onChange={this.handleInputChange}
                placeholder="Password"
                disabled
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="supervisorName"> supervisorName</label>
              <input
                type="text"
                className="form-control"
                id="supervisorName"
                name="supervisorName"
                value={this.state.supervisorName}
                onChange={this.handleInputChange}
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label for="supervisorEmail"> supervisorEmail</label>
              <input
                type="text"
                className="form-control"
                id="supervisorEmail"
                name="supervisorEmail"
                value={this.state.supervisorEmail}
                onChange={this.handleInputChange}
                placeholder="supervisorEmail"
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label for="remarks"> Topic</label>
            <input
              type="text"
              className="form-control"
              id="remarks"
              name="remarks"
              value={this.state.remarks}
              onChange={this.handleInputChange}
              placeholder="remarks"
              disabled
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
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
