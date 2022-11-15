import React from "react";
import { useStateContext } from "../contexts/FormsContext";

import "./Signup.css";

export default function Signup() {
  const {
    fname,
    setFname,
    lname,
    setLname,
    age,
    setAge,
    mobileno,
    setMobileno,
    username,
    setUsername,
    passward,
    setPassward,
  } = useStateContext();

  return (
    <>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>

      <div className="container">
        <div className="Headdiv">
          <h1>Create Account</h1>
          <p>Sign up with your social media account or email address</p>
        </div>

        <div className="formdiv">
          <form>
            <tr>
              FirtName:
              <input
                type="text"
                value={fname}
                placeholder="Enter Your FirstName"
              ></input>
            </tr>

            <tr>
              LastName:
              <input
                type="text"
                value={lname}
                placeholder="Enter Your LastName"
              ></input>
            </tr>

            <tr>
              Age:
              <input
                type="text"
                value={age}
                placeholder="Enter Your Age"
              ></input>
            </tr>

            <tr>
              MobileNo:
              <input
                type="text"
                value={mobileno}
                placeholder="Enter Your MobileNo"
              ></input>
            </tr>

            <tr>
              UserName:
              <input
                type="text"
                value={username}
                placeholder="Enter Your UserName"
              ></input>
            </tr>

            <tr>
              Passward:
              <input
                type="password"
                value={passward}
                placeholder="Enter Your Passward"
              ></input>
            </tr>
          </form>
        </div>
      </div>
    </>
  );
}
