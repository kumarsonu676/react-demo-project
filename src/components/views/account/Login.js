import "./Login.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../../validation/login.validation";
import axios from "axios";
import { config } from "../../../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../shared/Meta";
import { useState } from "react";
import { authenticationService } from "../../../services/authentication.service";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const location = useLocation();
  const returnUrl = location?.state?.from || "";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "sonu@gmrwebteam.com",
      password: "Sonu123!@#",
    },
  });

  const { errors } = formState;

  const login = (data) => {
    //console.log("data", data);
    setIsSubmitting(true);
    axios({
      method: "post",
      url: `${config.apiEndpoint}/api/account/login`,
      data: data,
    })
      .then(function (response) {
        setIsSubmitting(false);
        if (response && response.status === 200 && response.data) {
          var token = response.data.token;
          authenticationService.login(token);
          navigate(returnUrl === "" ? "/" : returnUrl);
        } else {
          toast.error("Invalid username or password", {
            hideProgressBar: true,
            pauseOnHover: true,
          });
        }
      })
      .catch(function (error) {
        setIsSubmitting(false);
        if (error.response && error.response.status) {
          toast.error("Invalid username or password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          console.log("error", error);
          toast.error("Some error occured.");
        }
      });
  };

  return (
    <>
      <Meta title="Login" />
      <div className="form-signin">
        <form method="post" onSubmit={handleSubmit(login)}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${errors.email ? "invalid" : ""}`}
              id="email"
              {...register("email")}
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
          <div className="form-floating">
            <input
              type="password"
              className={`form-control ${errors.password ? "invalid" : ""}`}
              id="password"
              {...register("password")}
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" {...register("rememberMe")} /> Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
