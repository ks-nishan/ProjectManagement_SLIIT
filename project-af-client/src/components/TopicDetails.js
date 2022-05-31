import React, { Component } from "react";
import axios from "axios";

export default class TopicDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicReg: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    axios.get(`/topic_Reg/${id}`).then((res) => {
      if (res.data.success) {
        // console.log(res.data.topicReg);
        this.setState({
          topicReg: res.data.topicRegs,
        });
        // console.log(this.state.topicReg);
      }
      console.log("Faild");
      console.log(res.data);
      this.setState({
        topicReg: res.data.topicRegs,
      });
    });
  }
  render() {
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
    } = this.state.topicReg;
    return (
      <div style={{ marginTop: "25px" }}>
        <h3>{leaderName}</h3>

        <dl className="row">
          <dt className="col-sm-3">leaderEmail</dt>
          <dd className="col-sm-9">{leaderEmail}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">leaderPhone</dt>
          <dd className="col-sm-9">{leaderPhone}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">accadamicYear</dt>
          <dd className="col-sm-9">{accadamicYear}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">faculty</dt>
          <dd className="col-sm-9">{faculty}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">studyLevel</dt>
          <dd className="col-sm-9">{studyLevel}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">startDate</dt>
          <dd className="col-sm-9">{startDate}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">courceCode</dt>
          <dd className="col-sm-9">{courceCode}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">supervisorName</dt>
          <dd className="col-sm-9">{supervisorName}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">supervisorEmail</dt>
          <dd className="col-sm-9">{supervisorEmail}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">remarks</dt>
          <dd className="col-sm-9">{remarks}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">status</dt>
          <dd className="col-sm-9">
            <span class="badge badge-success">{status}</span>
          </dd>
        </dl>
      </div>
    );
  }
}
