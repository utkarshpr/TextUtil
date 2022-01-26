import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

var btc, mys;
function Navbar() {
  const [btncolor, setBtn] = useState("primary");
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "orange",
  });

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("danger");
      btc = btncolor;
      mys = mystyle;
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "orange",
      });
      setBtn("primary");
      btc = btncolor;
      mys = mystyle;
    }
  };

  return (
    <div id="id">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Text Utils
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
export { btc };
export { mys };
