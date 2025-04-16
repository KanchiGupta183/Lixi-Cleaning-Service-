import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegHelper() {
  const [profile_img, setImage] = useState(null);

  const initialValues = {
    helpername: "",
    mobileno: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    address: "",
    birthyear: "",
    languages: "",
    education: "",
    health_issues: "",
    lastjob: "",
    type: "",
    profile: "",
    experience: "",
    category: "",
    adhaarcard: "",
    salary: "",
    detail: "",
    profile_img: "",
  };

  const {
    values,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );

      // Simulating a successful API call using setTimeout
      setTimeout(() => {
        console.log("Simulating successful API call.");
        action.resetForm();
      }, 1000);
    },
    validate: (values) => {
       const errors = {};

       // Perform your custom validation here
       if (!values.helpername) {
         errors.helpername = "Helper name is required";
       }

       if (!values.email) {
         errors.email = "Email is required";
       } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
       ) {
         errors.email = "Invalid email address";
       }

       if (!values.password) {
         errors.password = "Password is required";
       } else if (values.password.length < 6) {
         errors.password = "Password must be at least 6 characters long";
       }

       

       return errors;
    },
  });

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="user-form-area ptb-100">
        <div className="container">
          <div className="user-item">
            <h2>Register As Helper</h2>
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Time Slot
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Select
                          name="category"
                          value={values.category}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="none">Choose Time Slot</option>

                          <option value="8hours">8 Hours</option>
                          <option value="12hours">12 Hours</option>
                          <option value="24hours">24 Hours</option>
                          <option value="nightshift">Night Shift</option>
                        </Form.Select>
                        {errors.category && touched.category ? (
                          <p style={{ color: "red" }}>{errors.category}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Profile Type
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Select
                          name="profile"
                          value={values.profile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="none">Choose Profile Type</option>

                          <option value="cook">Cook</option>
                          <option value="babysitter">BabySitter</option>
                          <option value="watchman">Watchman</option>
                          <option value="maid">Maid</option>
                          <option value="eldercare">Elder Care</option>
                          <option value="gardner">Gardner</option>
                        </Form.Select>
                        {errors.profile && touched.profile ? (
                          <p style={{ color: "red" }}>{errors.profile}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3" value={values.type}>
                      <Form.Label column sm={2} className="label">
                        User type
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          name="type"
                          label="Helper"
                          value="helper"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.type && touched.type ? (
                          <p style={{ color: "red" }}>{errors.type}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Helper Name
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Username"
                          name="helpername"
                          value={values.helpername}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.helpername && touched.helpername ? (
                          <p style={{ color: "red" }}>{errors.helpername}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Helper Email
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Email Address"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.email && touched.email ? (
                          <p style={{ color: "red" }}>{errors.email}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Experience
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Please Provide Your Experience in Years"
                          name="experience"
                          value={values.experience}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.experience && touched.experience ? (
                          <p style={{ color: "red" }}>{errors.experience}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Health Issues
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Mention Your Health Status"
                          name="health_issues"
                          value={values.health_issues}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.health_issues && touched.health_issues ? (
                          <p style={{ color: "red" }}>{errors.health_issues}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Password
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="password"
                          placeholder="Provide Enter Your Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                          <p style={{ color: "red" }}>{errors.password}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Confirm Password
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="password"
                          placeholder="Enter Your Matching Password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                          <p style={{ color: "red" }}>
                            {errors.confirmPassword}
                          </p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Mobile Number
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="number"
                          placeholder="Enter Your Contact Number"
                          name="mobileno"
                          value={values.mobileno}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.mobileno && touched.mobileno ? (
                          <p style={{ color: "red" }}>{errors.mobileno}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Adhaar Card
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="number"
                          placeholder="Provide Your Adhaar Details"
                          name="adhaarcard"
                          value={values.adhaarcard}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.adhaarcard && touched.adhaarcard ? (
                          <p style={{ color: "red" }}>{errors.adhaarcard}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Gender
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Select
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="none">Choose Your Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                        {errors.gender && touched.gender ? (
                          <p style={{ color: "red" }}>{errors.gender}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Bio Details
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Give Few Ideas About Yourself"
                          name="detail"
                          value={values.detail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.detail && touched.detail ? (
                          <p style={{ color: "red" }}>{errors.detail}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Last Job Details
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="desc lastjob with salary,location and reason to left"
                          name="lastjob"
                          value={values.lastjob}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lastjob && touched.lastjob ? (
                          <p style={{ color: "red" }}>{errors.lastjob}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column md={2} className="label">
                        Expected Salary
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="number"
                          placeholder="Provide Your Salary Expectations"
                          name="salary"
                          value={values.salary}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.salary && touched.salary ? (
                          <p style={{ color: "red" }}>{errors.salary}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column md={2} className="label">
                        Birth Year
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="number"
                          placeholder="Provide Your Birth Year"
                          name="birthyear"
                          value={values.birthyear}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.birthyear && touched.birthyear ? (
                          <p style={{ color: "red" }}>{errors.birthyear}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Known Languages
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Please provide Your Known Languages"
                          name="languages"
                          value={values.languages}
                          onChange={handleChange}
                        />
                        {errors.languages && touched.languages ? (
                          <p style={{ color: "red" }}>{errors.languages}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Education
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Add Your Qualification Details"
                          name="education"
                          value={values.education}
                          onChange={handleChange}
                        />
                        {errors.education && touched.education ? (
                          <p style={{ color: "red" }}>{errors.education}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        City
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your City Name"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.city && touched.city ? (
                          <p style={{ color: "red" }}>{errors.city}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Please Provide Your Address"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                        />
                        {errors.address && touched.address ? (
                          <p style={{ color: "red" }}>{errors.address}</p>
                        ) : null}{" "}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-3">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2} className="label">
                        Profile Image
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="file"
                          name="file"
                          onChange={(event) => {
                            setFieldValue("file", event.target.files[0]);
                            setImage(
                              URL.createObjectURL(event.target.files[0])
                            );
                          }}
                        />

                        <img
                          src={profile_img}
                          width="200"
                          height="200"
                          alt="get upload preview"
                        />

                        {errors.file && touched.file ? (
                          <p style={{ color: "red" }}>{errors.file}</p>
                        ) : null}
                      </Col>
                    </Form.Group>
                  </div>
                </div>

                <div className="col-lg-12">
                  <button
                    type="submit"
                    className="btn cmn-btn"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                  <span>Or</span>
                  <Link to="/login">Sign In</Link>
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
                    name="email"
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
