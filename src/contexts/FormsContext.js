import React, { createContext, useContext, useState } from 'react'


 const Maincontext= createContext();


export default function FormsContext({children}) {

    const[fname,setFname]=useState();
    const[lname,setLname]=useState();
     const [age, setAge] = useState();
      const [mobileno, setMobileno] = useState();
       const [username, setUsername] = useState();
        const [passward, setPassward] = useState();

  return (
    <div>
      <Maincontext.Provider
        value={{
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
        }}
      >
        {children}
      </Maincontext.Provider>
    </div>
  );
}

export const useStateContext = () => useContext(Maincontext);