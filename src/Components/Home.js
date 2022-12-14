import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="#">
            <img
              src="/imgs/logo-2.png"
              alt="tecblic-logo"
            />
           
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deshboard">
                  Deshboard
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
