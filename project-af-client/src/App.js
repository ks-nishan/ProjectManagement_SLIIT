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
import TopicsReg from "./components/TopicsReg";
import RegisterTopic from "./components/RegisterTopic";
import TopicDetails from "./components/TopicDetails";
import EditTopic from "./components/EditTopic";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div
          className="container"
          style={{ backgroungColor: "gray", flex: "1 1 auto" }}
        >
          <Route path="/login" component={Login}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/dashboad" exact component={AdminDash}></Route>
          <Route path="/add" component={CreateUser}></Route>
          <Route path="/edit/:id" component={EditUser}></Route>
          <Route path="/user/:id" component={UserDetails}></Route>
          <Route path="/topics" component={TopicsReg}></Route>
          <Route path="/topic/add" component={RegisterTopic}></Route>
          <Route path="/topicDetail/:id" component={TopicDetails}></Route>
          <Route path="/topic/edit/:id" component={EditTopic}></Route>
          <Route path="/file" component={FileUploadScreen}></Route>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
