//1) we use library like react-hook-form for validating the form easily

import { useStateContext } from "../contexts/FormsContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
  const handleChange = () => {
    // 2)  const name = e.target.name;
    //     const value = e.target.value;-----> instead this 3 lines we use watch from react hook form
    //     console.log(name, value);
    // 3)  show the name of input feild and we type the dynamic value in console by using onchange event
    // 4)   we use [] over name because we want dynamic data input  (fname/lname/username/pass) and its value ...not perticular name
    // setAlldata({ ...Alldata, [name]: value });
  };

  const { usersdata, setUsersdata } = useStateContext();

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log("react-hook-form", data);
    setUsersdata(prev=>[...prev,data]);
    console.log("checkdata==>", usersdata);
    navigate("/Login");
  };

  return (
    <>
      <div className="container">
        <div>
          <img src="/imgs/su.png" alt="signup" className="signuppic" />
        </div>
        <div className="Headdiv">
          <h1>Create a new account</h1>
          <p className="headpara">It's quick and easy.</p>

          <div className="formdiv">
            <form onSubmit={handleSubmit(onSubmit)}>
              <tr>
                <label>
                  FirtName
                  <input
                    name="FirtName"
                    {...register("FirtName", {
                      required: " *FirstName is required",
                      pattern: {
                        value: /^[a-zA-Z]*$/,
                        message: "* No Numbers are valid in firstName",
                      },
                    })}
                    type="text"
                    placeholder="FirstName"
                    onChange={handleChange}
                  />
                  {errors.FirtName && <p>{errors.FirtName.message}</p>}
                </label>
              </tr>

              <tr>
                <label>
                  LastName
                  <input
                    {...register("LastName", {
                      required: " *LastName is required",
                      pattern: {
                        value: /^[a-zA-Z]*$/,
                        message: "* No Numbers are valid in LastName",
                      },
                    })}
                    name="LastName"
                    type="text"
                    placeholder="LastName"
                    onChange={handleChange}
                  />
                  {errors.LastName && <p>{errors.LastName.message}</p>}
                </label>
              </tr>

              <tr>
                <label>
                  Age
                  <input
                    name=" Age"
                    {...register("Age", {
                      required: " *Age is required",
                      min: { value: 17, message: "age is not proper" },
                      max: { value: 70, message: "70 up user not valid" },
                      maxLength: { value: 2, message: "Enter the 2 digit age" },
                    })}
                    type="number"
                    placeholder="Age"
                    onChange={handleChange}
                  />
                  {errors.Age && <p>{errors.Age.message}</p>}
                </label>
              </tr>

              <tr>
                <label>
                  MobileNo
                  <input

                 
                    
                    {...register("MobileNo", {
                      required: "*MobileNo is required",
                      pattern: {
                        value:
                          /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
                        message: "*Alphabets are not valid",
                      },

                      minLength: {
                        value: 10,
                        message: "*number must be 10 digit ",
                      },
                      maxLength: {
                        value: 10,
                        message:
                          "*number having greter than 10 digit not valid",
                      },
                    })}
                    name="MobileNo"
                    type="text"
                    placeholder="MobileNo"
                    onChange={handleChange}
                  />
                  {errors.MobileNo && <p>{errors.MobileNo.message}</p>}
                </label>
              </tr>

              <tr>
                <label>
                  UserName
                  <input
                    {...register("UserName", {
                      required: " *UserName is required",
                    })}
                    name="UserName"
                    type="text"
                    placeholder="UserName"
                    onChange={handleChange}
                  />
                  {errors.UserName && <p>{errors.UserName.message}</p>}
                </label>
              </tr>

              <tr>
                <label>
                  Passward
                  <input
                    {...register("Passward", {
                      required: " *Password is required",
                      maxLength: {
                        value: 8,
                        message: "*valid length is 8",
                      },
                    })}
                    name="Passward"
                    type="password"
                    placeholder="Passward"
                    onChange={handleChange}
                  />
                  {errors.Passward && <p>{errors.Passward.message}</p>}
                </label>
              </tr>

              <div className="battondiv">
                <button
                  type="submit"
                  // onClick={() => submit()}
                  className="btn btn-sm btn-success"
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
