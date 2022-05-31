import React from "react";

function HomeNavBar() {
  return (
    <div
      style={{
        bottom: "0",
        color: "#707070",
        height: "2em",
        left: "0",
        position: "fixed", //changed to relative from fixed also works if position is not there
        fontSize: "small",
        width: "100%",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
        <div className="container-fluid">
          <a className="navbar-brand text-muted" href="#">
            SLIITPP-2022
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ marginLeft: "400px" }}>
                <a className="nav-link" href="/Admin_side_login">
                  All rights are resived @2022
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Admin_side_registration">
                  Sri Lanka Institute of Information Technology
                </a>
              </li>
              <li style={{ marginLeft: "400px", marginTop: "7px" }}>
                <i class="bi-facebook" style={{ marginRight: "4px" }}>
                  <a href="www.google.com"></a>
                </i>
                <i class="bi-youtube" style={{ marginRight: "4px" }}></i>
                <i class="bi-twitter" style={{ marginRight: "4px" }}></i>
                <i class="bi-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavBar;
