import axios from "axios";
import { useForm } from "react-hook-form";

import Meta from "../shared/Meta";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function submitData(data) {
    console.log(data);

    //send data to an API endpoint
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", data)
    //   .then(function (response) {
    //     console.log("response", response);
    //   })
    //   .catch(function (error) {
    //     console.log("error", error);
    //   });
  }

  function getTodoItems() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(function (response) {
        console.log("response", response);
      });
  }

  return (
    <>
      <PrivacyPolicy />
      <Meta
        title="I am contact page"
        keyword="i am contact keyword"
        description="i am contact description"
      />
      <h1 className="text-center">Contact Us</h1>

      <button className="btn btn-success" onClick={getTodoItems}>
        Get TODO
      </button>

      <div className="row">
        <div className="col-md-6 offset-3">
          <form
            method="post"
            onSubmit={handleSubmit(submitData)}
            autoComplete="off"
          >
            <div className="form-group">
              <label>Name*</label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Minimum 3 chars required" },
                  maxLength: { value: 20, message: "Maximum 20 chars allowed" },
                  pattern: {
                    value: /^[A-Za-z.\s]+$/i,
                    message: "Invalid name",
                  },
                })}
                id="name"
                className={`form-control ${errors.name ? "invalid" : ""}`}
              />
              {errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    message: "Invalid email",
                  },
                })}
                id="email"
                className={`form-control ${errors.email ? "invalid" : ""}`}
              />
              <span className="text-danger">{errors.email?.message}</span>
            </div>

            <div className="form-group">
              <label>Phone*</label>
              <input
                type="text"
                {...register("phone")}
                id="phone"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <select
                {...register("state", { required: "State is required" })}
                id="state"
                className="form-control form-select"
              >
                <option value="">Select State</option>
                <option value="BR">Bihar</option>
                <option value="UP">Utter Pradesh</option>
              </select>
              <span className="text-danger">{errors.state?.message}</span>
            </div>

            <div className="form-group">
              <label>Gender</label>
              <input
                type="radio"
                {...register("gender", { required: "Select gender" })}
                value="Male"
              />
              Male
              <input
                type="radio"
                {...register("gender", { required: "Select gender" })}
                value="Female"
              />
              Female
              <br />
              <span className="text-danger">{errors.gender?.message}</span>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                {...register("message")}
                id="message"
              ></textarea>
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                {...register("privacyPolicy", {
                  required: "Select privacy and policy",
                })}
              />{" "}
              I agree to the terms and condition.
              <br />
              <span className="text-danger">
                {errors.privacyPolicy?.message}
              </span>
            </div>

            <div className="form-group text-center mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
