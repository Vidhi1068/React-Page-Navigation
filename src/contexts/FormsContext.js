import React, { createContext, useContext, useState } from "react";

const Maincontext = createContext();

export default function FormsContext({ children }) {
//we make this state to get the data that users put while sign in ..further we use it to match the data in loginform==signup
  const [usersdata, setUsersdata] = useState([]);
  const [success,setSuccess]=useState()
  const[notsuccess,setNotsuccess]=useState()


  return (
    <div>
      <Maincontext.Provider
        value={{
          usersdata,
          setUsersdata,
          success,
          setSuccess,
          notsuccess,
          setNotsuccess,
        }}
      >
        {children}
      </Maincontext.Provider>
    </div>
  );
}

export const useStateContext = () => useContext(Maincontext);
