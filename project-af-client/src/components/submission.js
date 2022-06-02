import React, { Component } from "react";
import { DropzoneArea} from "material-ui-dropzone";
import './mathy.css'
import jsPDF from "jspdf";
import axios from "axios";

import pdf from './Image/download.png'
import { blue } from "@material-ui/core/colors";


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files) {
    console.log(files);
    this.setState({
      files: files
    });
  }
  pdfGenerator=()=>{
    var doc=new jsPDF('landscape','px','a4','false');
    //doc.addImage(img,'JFIF',65,20,500,400)
    doc.text(60,60,'Thesis Preparation and Submission Guidelines forSri Lanka Institute of Information Technology')
   
    doc.addPage()
    doc.setFont('Director Academic Affairs')
    doc.text(60,60,' SLIIT');
    doc.text(60,60,' January 2020');
    doc.save('downloads')

  }
  handleSubmit = () => {
    if (this.state.file !== "" ) {
      axios.post("http://localhost:3001/submission", this.state).then((res) => {
        console.log("successfully posted");
        this.setState({
          file:''

         
        });
      });
      window.location = "/";
    }
  };
  render() {
      
return (
    <div class="container">
        <br/>
        <header><h3 ><center>
         Thesis Preparation and Submission Guidelines for
Sri Lanka Institute of Information Technology  </center></h3></header>
<form onSubmit={()=>this.handleSubmit()}>
     <img src={pdf} alt="" onClick={this.pdfGenerator} />
     
     <br/><br/>
      
<DropzoneArea onChange={this.handleChange.bind(this)} id="dropzone"   accept="pdf"
        maxSize={5875200}/>
        <br/><br/>

<center> <button id="pdfbutton">Submit</button> </center>
</form>
    </div>
)

      
    
  }
}
