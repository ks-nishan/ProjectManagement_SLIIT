import React, { Component, useState } from "react";
import axios from "axios";
import user from "../images/user.png";
import { Image } from "cloudinary-react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      imageSelected: {},
      profileImg:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/user/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          user: res.data.user,
        });

        console.log(this.state.user);
      }
      console.log("Fail");
    });
  }

  render() {
    //display image in box
    const imageHandler = (e) => {
      console.log("imageHandler");
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        if (reader.reasyState != 2) {
          this.setState({ profileImg: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };

    //upload image to cloud
    const uploadImage = () => {
      const formData = new FormData();
      formData.append("file", this.state.imageSelected);
      formData.append("upload_preset", "dl6aaqa4");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dretkzsyd/image/upload",
          formData
        )
        .then((response) => {
          console.log(response);
        });
    };

    const profileImg = this.state.profileImg;
    const { userName, role, userId, pwd, cpwd } = this.state.user;
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>User Details</h3>
        <h4>{userName}</h4>
        <div className="row mt-3">
          <div
            className="card col-2"
            style={{ width: "230px", height: "200px", marginLeft: "10px" }}
          >
            <img
              class="card-img-top"
              // src={user}
              src={profileImg}
              alt="user"
              cloudName="dretkzsyd"
              publicId="https://res.cloudinary.com/dretkzsyd/image/upload/v1652789793/med7qxk1yfesftm3xhjb.jpg"
            />
            {/* <img
              cloudName="dretkzsyd"
              publicId="https://res.cloudinary.com/dretkzsyd/image/upload/v1652789793/med7qxk1yfesftm3xhjb.jpg"
            /> */}
          </div>
          {/* <div className="form-group">
            <label>Select Single File</label>
            <input
              type="file"
              className="form-control"
              // onChange={(e) => SingleFileChange(e)}
            />
          </div> */}
          <input
            type="file"
            onChange={(event) => {
              this.setState({ imageSelected: event.target.files[0] });
            }}
          />
          <input
            style={{
              color: "transparent",
              backgroundColor: "transparent",
              borderColor: "transparent",
              cursor: "default",
            }}
            type="file"
            onChange={imageHandler}
          />
          <button
            class="btn btn-success"
            style={{
              width: "230px",
              height: "40px",
              marginTop: "100px",
              marginLeft: "10px",
            }}
            onClick={uploadImage()}
          >
            Upload pic
          </button>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 style={{ borderLeft: "4px solid black", color: "red" }}>
              Personal Details
            </h3>
            <div className="row">
              <dt class="col-sm-3">User ID</dt>
              <dd class="col-sm-9">{userId}</dd>

              <dt class="col-sm-3">User Role</dt>
              <dd class="col-sm-9">{role}</dd>

              <dt class="col-sm-3">Email Address</dt>
              <dd class="col-sm-9">{pwd}</dd>

              <dt class="col-sm-3">Password 2</dt>
              <dd class="col-sm-9">{cpwd}</dd>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              {" "}
              <div className="row">
                <div className="col">
                  <h3 style={{ borderLeft: "4px solid black", color: "red" }}>
                    Project Details
                  </h3>
                  <div className="row">
                    <dt class="col-sm-6">Group Registration</dt>
                    <dd class="col-sm-6">
                      <span class="badge badge-success">Registered</span>
                    </dd>

                    <dt class="col-sm-6">Topic Registration</dt>
                    <dd class="col-sm-6">
                      <span class="badge badge-success">Accepted</span>
                    </dd>

                    <dt class="col-sm-6">Co-Supervisor</dt>
                    <dd class="col-sm-6">Mr.Kawesha</dd>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              {" "}
              <h3 style={{ borderLeft: "4px solid black", color: "red" }}>
                Supervisors Details
              </h3>
              <div className="row">
                <dt class="col-sm-6">Co-supervisor</dt>
                <dd class="col-sm-6">
                  <span class="badge badge-success">Not Assigned</span>
                </dd>

                <dt class="col-sm-6">Suppervisor</dt>
                <dd class="col-sm-6">
                  <span class="badge badge-danger">Not Assigned</span>
                </dd>

                <dt class="col-sm-6">Pannel Members</dt>
                <dd class="col-sm-6">Mr.Kawesha</dd>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
