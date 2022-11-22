import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Deshboard from "./Components/Deshboard"

function App() {
  return (
    <>
      <div>
        <Home />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/deshboard" element={<Deshboard />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
  //here we install react-hook-form for form validation bcz if we dont use it we have to create so many states for different inputs.... 