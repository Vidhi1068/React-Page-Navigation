//1) we use library like react-hook-form for validating the form easily

import { useStateContext } from "../contexts/FormsContext";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import "./Signup.css";

export default function Signup() {
  const { Alldata, setAlldata } = useStateContext();

  const { register, handleSubmit ,formState:  {errors}} = useForm();
  // console.log("watch", watch());
  const onSubmit = (data) => console.log("react-hook-form", data);

  const handleChange = () => {

    // 2)  const name = e.target.name;
    //     const value = e.target.value;-----> instead this 3 lines we use watch from react hook form
    //     console.log(name, value);

    // 3)  show the name of input feild and we type the dynamic value in console by using onchange event
    // 4)   we use [] over name because we want dynamic data input  (fname/lname/username/pass) and its value ...not perticular name

    // setAlldata({ ...Alldata, [name]: value });

  };

  return (
    <>
      <div className="container">
        <div className="Headdiv">
          <h1>Create a new account</h1>
          <p className="headpara">It's quick and easy.</p>
        </div>
        <div className="formdiv">
          <form onSubmit={handleSubmit(onSubmit)}>
            <tr>
              <label>
                FirtName
                <input
                  name="FirtName"
                  {...register("FirtName", {
                    required: " *FirstName is required",
                    valueAsNumber: {
                      value: false,
                      message: "number is not valid to name",
                    },
                  })}
                  type="text"
                  placeholder="FirstName"
                  onChange={handleChange}
                ></input>
                {errors.FirtName && <p>{errors.FirtName.message}</p>}
              </label>
            </tr>

            <tr>
              <label>
                LastName
                <input
                  {...register("LastName", {
                    required: " *LastName is required",
                  })}
                  name="LastName"
                  type="text"
                  placeholder="LastName"
                  onChange={handleChange}
                ></input>
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
                ></input>
                {errors.Age && <p>{errors.Age.message}</p>}
              </label>
            </tr>

            <tr>
              <label>
                MobileNo
                <input
                  {...register("MobileNo", {
                    required: "*MobileNo is required",
                    minLength : { value: 10, message: "digit must be 10 " },
                    maxLength: { value: 10, message: "number having greter than 10 digit" },
                  })}
                  name="MobileNo"
                  type="text"
                  placeholder="MobileNo"
                  onChange={handleChange}
                ></input>
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
                ></input>
                {errors.UserName && <p>{errors.UserName.message}</p>}
              </label>
            </tr>

            <tr>
              <label>
                Passward
                <input
                  {...register("Passward", {
                    required: " *Password is required",
                    maxLength: 8,
                  })}
                  name="Passward"
                  type="password"
                  placeholder="Passward"
                  onChange={handleChange}
                ></input>
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
    </>
  );
}
