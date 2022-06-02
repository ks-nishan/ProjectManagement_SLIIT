import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserDetails from "./components/UserDetails";
import Footer from "./components/Footer";
import Login from "./components/Login";
import FileUploadScreen from "./components/FileUploadScreen";
import AdminDash from "./components/AdminDash";
import Topicdocument  from './components/TopicSubmission';
import Topicstudent from './components/topicstudent'
import Topicpannel from "./components/topicpannel";
import Listsupervisor from "./components/listsuppervisor";
import Listcosupervisor from "./components/listcosupervisor";
import HomeNavBarStudent from "./components/Nav_Student";
import Submission from './components/submission'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomeNavBarStudent/>
        <div className="container" style={{ backgroungColor: "gray" }}>
          <Route path="/" exact component={Home}></Route>
          <Route path="/topicsub" component={Topicdocument}></Route>
          <Route path="/topicstudent" component={Topicstudent}></Route>
          <Route path="/topicpanel" component={Topicpannel}></Route>
          <Route path="/supervisor" component={Listsupervisor}></Route>
          <Route path="/cosupervisor" component={Listcosupervisor}></Route>
          <Route path="/submission" component={Submission}></Route>
          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
