import React from "react";
import "./Login.css";
import { useStateContext } from "../contexts/FormsContext";

export default function Login() {

  const { Alldata, setAlldata } = useStateContext();

   const handleChange = (e) => {
    
     const name = e.target.name;
     const value = e.target.value;
     console.log(name, value);
     setAlldata({ ...Alldata, [name]: value });
   };

   const submit = () => {
     console.log("Alldata", Alldata);
     
   };


  return (
    <div>
      <div className="containerlogin">
        <div className="Headdivlogin">
          <h4>Log in to Your Account</h4>
        </div>
        <div className="formdivlogin">
          <form>
            <tr className="logintr">
              <label>
                <input
                  type="text"
                  placeholder="Enter Your UserName"
                  name="login_username"
                  value={Alldata.UserName}
                  onChange={handleChange}
                ></input>
              </label>
            </tr>

            <tr className="logintr">
              <label>
                <input
                  type="password"
                  placeholder="Enter Your Passward"
                  name="login_password"
                  value={Alldata.Passward}
                  onChange={handleChange}
                ></input>
              </label>
            </tr>
          <div className="battondivlogin">
            <button
              type="button"
              class="btn btn-sm btn-success"
              onClick={submit}
            >
              Login
            </button>
          </div>
          </form>

        </div>
      </div>
    </div>
  );
}
