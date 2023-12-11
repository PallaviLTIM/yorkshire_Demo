import '../style.css';
import React, { useState }  from 'react';
import { Formik, useFormik } from 'formik';
import { LoginSchema } from "../utils/Schema";
import logo from '../images/logo.png' // relative path to image
import { Link, useNavigate, navigate } from "react-router-dom";

function Login() {
    const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  //let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      // alert("test");
      const formData = JSON.stringify(values);
      // console.log(values);
      const { email, password } = values;

     /* const response = await fetch("http://localhost:5000/api/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();*/

      let data = {
        'username': 'admin@gmail.com',
        'password': 'admin123',
        'status': 'ok'
      }
      if (data) {
        if (data.status == "ok") {
          localStorage.setItem("user", JSON.stringify(data));
          // console.log("data", data.email);
          // const payload = {
          //   email: email,
          // };
          // dispatch({ type: "ADD_USER", payload: payload });
         navigate("/profile");
        }
      }
      // console.log("res1", data.data);

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });
  return (
    <>
      <div className="container-fluid login-container">
        <div className="">
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-5 col-sm-12 shadow-lg p-5 bg-light">
              <div className="text-center">
              <img src={logo} alt={"logo"}/>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="p-4">
                  <div className="input-group mb-3">
                    
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="">{formik.errors.email}</span>
                  )}
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <span className="">{formik.errors.password}</span>
                  )}
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Remember Me
                    </label>
                  </div> */}
                  <p className="text-end mt-0">
                    <span className="">
                        Forget Password?
                      {/* <Link to="/signup">Sign Up</Link> */}
                    </span>
                  </p>
                  <div className="input-group mb-3">
                    <button
                      className=" form-control btn btn-primary text-center mt-2 "
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-center mt-0">
                    <span className="">
                        Not a member? Create an account
                      {/* <Link to="/signup">Sign Up</Link> */}
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
