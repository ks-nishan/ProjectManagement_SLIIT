import React from "react";
import axios from "axios";

import './mathy.css'

class Listsupervisor extends React.Component {
  state = {
    supervisor: [],
    Email: "",
   
    

  };

  getSupervisor = () => {
    axios.get("http://localhost:3001/supervisor").then((res) => {
      console.log(res);
      this.setState({ supervisor: res.data });
    });
  };
  componentDidMount = () => {
    this.getSupervisor();
  };

  render() {
    return (
    <div class="contanier">

    
      <div>
        {this.state.supervisor.map((supervisor) => (
          <div
            key={supervisor._id}
            class="card"
            style={{
              borderRadius: "10px",
             
             
              display: "inline-block",
              marginTop: "100px",
              
            }}
          >
            <div class="container">
              <div class="card-body d-flex flex-column align-items-center" id="card_design">
                <div class="container">
                  <div class="row-md-6">
                    <div class="col-12 col-md-8">
                      <h2>
                        <b>{supervisor.Name} </b>
                      </h2>
                      <h2>{supervisor.Designation}</h2>
                      <h3>{supervisor.Faculty}</h3>
                      <h2  class="mainhead">

                      </h2>
                      <label>
                        <h2>
                        Research Intrests
                        </h2>
                     
                      </label>
                    
                       
                         <h3>
                         
                         <h4>
                         <li>
                         {supervisor.Research}
                         </li>
                         </h4>
                          
                        
                         
                        
                       
                         <h4>
                         <li>
                         {supervisor.R1}
                         </li>
                         </h4>
                         <h4>
                         <li>
                         {supervisor.R2}
                         </li>
                         </h4>
                         </h3>
                      
                       
                         <h2 class="mainhead"> </h2>
                      
                    
                    
                     
                      
                      <label>
                     <h2> Contact</h2>
                      </label><br/>
<h3>


                      {supervisor.Email}<br/><br/>
                      {supervisor.Phonenum}</h3>
                      
                      
                     
                      <button
                        type="button"
                        class="btn btn-info"
                        data-toggle="modal"
                        data-target="#myModal"
                        id="super_button"
                      
                      
                      >
                        <a href="mailto:"   > EMAIL</a>
                      
                      </button>
                    </div>
                    
                  </div>
                  <div class="row-md-6">
                

                 
                      </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/><br/><br/>
      </div>
    );
  }
}

export default Listsupervisor;
