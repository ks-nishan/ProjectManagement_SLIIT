import React from "react";
import axios from "axios";
import './mathy.css'

class Listcosupervisor extends React.Component {
  state = {
    cosupervisor: [],
    Email: "",
  };

  getcoSupervisor = () => {
    axios.get("http://localhost:3001/cosupervisor").then((res) => {
      console.log(res);
      this.setState({ cosupervisor: res.data });
    });
  };
  componentDidMount = () => {
    this.getcoSupervisor();
  };

  render() {
    return (
      <div class="contanier">
        <div>
          {this.state.cosupervisor.map((cosupervisor) => (
            <div
              key={cosupervisor._id}
              class="card"
              style={{
                borderRadius: "10px",

                backgroundColor: "whitesmoke",
                display: "inline-block",
                marginTop: "100px",
                marginRight: "10px",
                marginLeft: "350px",
              }}
            >
              <div class="container">
                <div
                  class="card-body d-flex flex-column align-items-center"
                  id="card_design"
                >
                  <div class="container">
                    <div class="row-md-6">
                      <div class="col-12 col-md-8">
                        <h2>
                          <b>{cosupervisor.Name} </b>
                        </h2>
                        <h2>{cosupervisor.Designation}</h2>
                        <h3>{cosupervisor.Faculty}</h3>
                        <h2 class="mainhead"></h2>
                        <label>Research Intrests</label>

                        <h3>
                          <li>{cosupervisor.Research}</li>
                          <br />
                          <li>{cosupervisor.R1}</li>
                          <br />
                          <li>{cosupervisor.R2}</li>
                        </h3>

                        <h2 class="mainhead"> </h2>

                        <label>Contact</label>
                        <br />
                        <h3>
                          {cosupervisor.Email}
                          <br />
                          <br />
                          {cosupervisor.Phonenum}
                        </h3>

                        <button
                          type="button"
                          class="btn btn-info"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          EMAIL
                        </button>
                      </div>
                    </div>
                    <div class="row-md-6"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Listcosupervisor;
