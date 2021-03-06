import React from "react";
import logo from "../images/SLIIT_Logo.png";

function HomeNavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundClor: "blue" }}
      >
        <img
          class="card-img-top"
          src={logo}
          style={{ height: "50px", width: "50px" }}
        />
        <div className="container-fluid">
          <a
            className="navbar-brand h1 fw-bold"
            style={{ fontSize: "30px" }}
            href="/"
          >
            <span className="text-warning text-uppercase">SLIIT</span>
            <span style={{ color: "white" }}>PP-2022</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/dashboad">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/add">
                  Create User
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  All Users
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/workshop">
                  Workshops
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/date">
                  Important Dates
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex" style={{ marginLeft: "260px" }}>
              <button className="btn btn-warning tab" type="submit">
                <a className="text-decoration-none text-dark " href="/Login">
                  Login
                </a>{" "}
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-outline-warning " type="submit">
                <a className="text-decoration-none text-white" href="/add">
                  Registration
                </a>
                <i className="bi bi-save2"></i>
              </button>
              &nbsp;&nbsp;
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavBar;
