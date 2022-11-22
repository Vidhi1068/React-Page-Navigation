import React, { createContext, useContext, useState } from "react";

const Maincontext = createContext();

export default function FormsContext({ children }) {
  const [Alldata, setAlldata] = useState({});
  const [error, setError] = useState(false);

  return (
    <div>
      <Maincontext.Provider
        value={{
          Alldata,
          setAlldata,
          error,
          setError,
        }}
      >
        {children}
      </Maincontext.Provider>
    </div>
  );
}

export const useStateContext = () => useContext(Maincontext);
