import React from 'react'
import "./Deshboard.css"
import { useStateContext } from "../contexts/FormsContext";
 
export default function Deshboard(){

  const { success } = useStateContext();
  
  return (


    <>
      <div className="maindiv">
        <h1 className="h1desh">Welcome to DeshBoard</h1>
        <div>
          <button type="button" class="btn btn-success">
            {success}
          </button>
        </div>
        {/* <p className="dashboard">login successfully</p> */}
      </div>
    </>
  );
}

                                                                      