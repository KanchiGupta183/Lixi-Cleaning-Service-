import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../layout/Footer";
import { createNotification } from "./Notifications";

import Header from "../layout/Header";

export default function SignIn() {
  const [error, setError] = useState([]);
 

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validForm = () => {
    const { email, password } = user;
    const formError = {};
    console.log("form validation");
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    let isValue = true;

    if (!email) {
      formError["emailError"] = "email is required";
      isValue = false;
    } else if (!regEmail.test(email)) {
      formError["emailError"] = "email pattern wont match";
      isValue = false;
    }
    if (!password || password.length < 4) {
      formError["passwordError"] = "password is required";
      isValue = false;
    }

    setError(formError);
    return isValue;
  };

  
   const handleSubmit = (e) => {
     e.preventDefault(); 
      const val = validForm();
      if(val){
         setTimeout(() => {
           navigate("/");
         }, 1000);
        
         createNotification("success", "customer logged in successfully");
      }
      else {
         setTimeout(() => {
           navigate("/login");
         }, 1000);
          createNotification("warning", "Invalid Credintial");
      }
    
   };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Sign In</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevrons-right" />
                  </li>
                  <li>
                    <span>Sign In</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="user-form-area ptb-100">
        <div className="container">
          <div className="user-item">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      name="email"
                      value={user.email}
                      placeholder="Please Enter Your EmailId"
                      onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{error.emailError}</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Please Enter Your Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{error.passwordError}</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn cmn-btn" >
                    Sign In
                  </button>
                  <span>Or</span>
                  <Link to="/register">Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="subscribe-area">
        <div className="subscribe-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Stay Up To Date With Our Latest News!</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="newsletter-form" data-toggle="validator">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                  <button className="btn cmn-btn" type="submit">
                    Subscribe
                  </button>
                  <div id="validator-newsletter" className="form-result" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
