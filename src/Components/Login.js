import React from "react";
import "./Login.css";
import { useStateContext } from "../contexts/FormsContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { usersdata } = useStateContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (Logindata) => {
    console.log("login-data", Logindata);
    console.log("datafromsignup", usersdata);

    const vidhi = usersdata.filter(
      (ele) =>
        ele?.UserName === Logindata?.UserName &&
        ele?.Passward === Logindata?.Passward
    );
    console.log("matches values", vidhi[0].UserName,vidhi[0].Passward);

    navigate("/Deshboard");
  };

  return (
    <div>
      <div className="containerlogin">
        <div className="Headdivlogin">
          <h4>Log in to Your Account</h4>
        </div>
        <div className="formdivlogin">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    maxLength: {
                      value: 8,
                      message: "*valid length is 8",
                    },
                  })}
                  name="Passward"
                  type="password"
                  placeholder="Passward"
                ></input>
                {errors.Passward && <p>{errors.Passward.message}</p>}
              </label>
            </tr>

            <div className="battondivlogin">
              <button type="submit" class="btn btn-sm btn-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
