import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";


export default function Homepage() {
  const [srch, setSrch] = useState("pop");
  const [text, setText] = useState("");


  function handleSearch() {
    setSrch(text);
  }

  function handleText(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div>
      <Header />
      <div>
        <div className="banner-area three">
          <div className="banner-shape">
            <img src="assets/img/home-three/banner-main.jpg" alt="Banner" />
            <img src="assets/img/home-one/banner-shape1.png" alt="Shape" />
            <img src="assets/img/home-three/banner-shape1.png" alt="Shape" />
            <img src="assets/img/home-one/banner-shape3.png" alt="Shape" />
            <img src="assets/img/home-one/banner-shape4.png" alt="Shape" />
            <img src="assets/img/home-one/banner-shape5.png" alt="Shape" />
            <img src="assets/img/home-one/banner-shape6.png" alt="Shape" />
          </div>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-text">
                  <h1>
                    Best <span>Cleaning</span> Service Agency In The Town
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has been the industry's standard
                    dummy text ever.
                  </p>
                
                  <div className="banner-service">
                    <h3>Search Choice Provider</h3>
                    <div className="searchmain">
                   
                      <input
                        type="text"
                        value={text}
                        placeholder="enter your city"
                        onChange={handleText}
                        onKeyDown={handleSearch}
                        required
                      />
                      <SearchIcon
                        fontSize="large"
                        onClick={handleSearch}
                      ></SearchIcon>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="counter-area three">
          <div className="counter-wrap">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-6 col-lg-3">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer" data-count="15">
                        10
                      </span>
                    </h3>
                    <p>Years Experienced</p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer" data-count="156">
                        20
                      </span>
                    </h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer" data-count="456">
                        25
                      </span>
                    </h3>
                    <p>Project Completed</p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer" data-count="22">
                        22
                      </span>
                    </h3>
                    <p>Active Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choose-area two pt-100 pb-70">
          <div className="choose-shape">
            <img src="assets/img/home-one/choose1.png" alt="Shape" />
            <img src="assets/img/home-one/banner-shape3.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="choose-content">
                  <div className="about-img">
                    <img src="assets/img/home-two/choose1.jpg" alt="Choose" />
                    <img src="assets/img/home-two/choose2.jpg" alt="Choose" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-contact">
                  <div className="section-title">
                    <span className="sub-title">About Us</span>
                    <h2>Certified Cleaning Service Company Over 15 years</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur harum qui, beatae aliquid, esse modi asperiores, sit
                    ea pariatur ipsa quaerat repellendus voluptatibus commodi
                    doloremque architecto. Dignissimos doloremque quod modi.
                  </p>
                  <Link to="/about" className="cmn-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="service-area three pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Our Services</span>
              <h2>We Are Committed To Give Our Best Services</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="service-item">
                  <div className="service-top">
                    <img src="assets/img/home-one/service1.png" alt="Service" />
                    <img src="assets/img/home-one/service2.png" alt="Service" />
                  </div>
                  <h3>
                    <Link to="/carwashing">Car Washing</Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries
                  </p>
                  <Link to="/servicedetails" className="service-link">
                    Learn More
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-item two">
                  <div className="service-top">
                    <img src="assets/img/home-one/service3.png" alt="Service" />
                    <img src="assets/img/home-one/service4.png" alt="Service" />
                  </div>
                  <h3>
                    <Link to="/plumbing">Plumbing Service</Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries
                  </p>
                  <Link to="/servicedetails" className="service-link">
                    Learn More
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-item three">
                  <div className="service-top">
                    <img src="assets/img/home-one/service5.png" alt="Service" />
                    <img src="assets/img/home-one/service6.png" alt="Service" />
                  </div>
                  <h3>
                    <Link to="/homecleaning">House Cleaning</Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries
                  </p>
                  <Link to="/servicedetails" className="service-link">
                    Learn More
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-item">
                  <div className="service-top">
                    <img src="assets/img/home-one/service1.png" alt="Service" />
                    <img src="assets/img/home-one/service7.png" alt="Service" />
                  </div>
                  <h3>
                    <Link to="/officecleaning">Office Cleaning</Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries
                  </p>
                  <Link to="/servicedetails" className="service-link">
                    Learn More
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-item two">
                  <div className="service-top">
                    <img src="assets/img/home-one/service3.png" alt="Service" />
                    <img src="assets/img/home-one/service8.png" alt="Service" />
                  </div>
                  <h3>
                    <Link to="/carpetcleaning">Carpet Cleaning</Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries
                  </p>
                  <Link to="/servicedetails" className="service-link">
                    Learn More
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-item three">
                  <div className="service-top">
                    <img src="assets/img/home-one/service5.png" alt="Service" />
                    <img src="assets/img/home-one/service9.png" alt="Service" />
                  </div>
                  <h3>
                    <Link to="/windowcleaning">Windows Cleaning</Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries
                  </p>
                  <Link to="/servicedetails">
                    Learn More
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="estimate-area ptb-100">
          <div className="container">
            <div className="estimate-content">
              <div className="section-title">
                <h2>Let's Find A Estimate On Your Project</h2>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Place"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        id="your-message"
                        rows={6}
                        className="form-control"
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn cmn-btn">
                      Book A Schedule
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <section className="project-area pt-100 pb-70">
          <div className="project-shape">
            <img src="assets/img/home-one/banner-shape5.png" alt="Shape" />
            <img src="assets/img/home-one/project-shape1.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Our Projects</span>
              <h2>Have A Quick Look Some Of Our Works &amp; Services</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div className="project-item">
                  <div className="project-top">
                    <Link to="/projects">
                      <img
                        src="assets/img/home-one/project1.jpg"
                        alt="Project"
                      />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/interiorcleaning">
                      Interior Cleaning Service
                    </Link>
                  </h3>
                  <Link to="/projectdetails">View Project</Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="project-item">
                  <div className="project-top two">
                    <Link to="/projectdetails">
                      <img
                        src="assets/img/home-one/project2.jpg"
                        alt="Project"
                      />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/homecleaning">Home Cleaning</Link>
                  </h3>
                  <Link to="/projectdetails">View Project</Link>
                </div>
                <div className="project-item">
                  <div className="project-top two">
                    <Link to="/projects">
                      <img
                        src="assets/img/home-one/project3.jpg"
                        alt="Project"
                      />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/officecleaning">Office Cleaning Service</Link>
                  </h3>
                  <Link to="/projectdetails">View Project</Link>
                </div>
              </div>
              <div className=" col-sm-6 col-lg-6">
                <div className="project-item">
                  <div className="project-top">
                    <Link to="/projects">
                      <img
                        src="assets/img/home-one/project4.jpg"
                        alt="Project"
                      />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/hospitalcleaning">
                      Hospital Cleaning Service
                    </Link>
                  </h3>
                  <Link to="/projectdetails">View Project</Link>
                </div>
              </div>
              <div className=" col-sm-6 col-lg-6">
                <div className="project-item">
                  <div className="project-top">
                    <Link to="/projects">
                      <img
                        src="assets/img/home-one/project5.jpg"
                        alt="Project"
                      />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/homecleaning">Home Cleaning Service</Link>
                  </h3>
                  <Link to="/projectdetails">View Project</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Blog</span>
              <h2>Our Latest Blog</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="blog-item">
                  <Link to="/blogdetails">
                    <img src="assets/img/home-three/blog1.jpg" alt="Blog" />
                  </Link>
                  <div className="blog-bottom">
                    <h3>
                      <Link to="/blogdetails">
                        Know More About Our Clean Furniture And Tools
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>By:</span>
                        <Link to="/profile">Admin</Link>
                      </li>
                      <li>
                        <span>20</span>
                        <Link to="/comments">Comments</Link>
                      </li>
                      <li>
                        <span>11</span>
                        <Link to="/views">Views</Link>
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. It has survived not only five
                      centuries
                    </p>
                    <Link to="/blogdetails">
                      Read More
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="blog-item">
                  <Link to="/blogdetails">
                    <img src="assets/img/home-three/blog2.jpg" alt="Blog" />
                  </Link>
                  <div className="blog-bottom">
                    <h3>
                      <Link to="/blogdetails">
                        We Are Doing Hospital Cleaning For Social Work
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>By:</span>
                        <Link to="/profile">Admin</Link>
                      </li>
                      <li>
                        <span>21</span>
                        <Link to="/comments">Comments</Link>
                      </li>
                      <li>
                        <span>15</span>
                        <Link to="/views">Views</Link>
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. It has survived not only five
                      centuries
                    </p>
                    <Link to="/blogdetails">
                      Read More
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                <div className="blog-item">
                  <Link to="/blogdetails">
                    <img src="assets/img/home-three/blog3.jpg" alt="Blog" />
                  </Link>
                  <div className="blog-bottom">
                    <h3>
                      <Link to="/blogdetails">
                        We Work For You To Give Best Services
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>By:</span>
                        <Link to="/profile">Admin</Link>
                      </li>
                      <li>
                        <span>22</span>
                        <Link to="/comments">Comments</Link>
                      </li>
                      <li>
                        <span>20</span>
                        <Link to="/views">Views</Link>
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. It has survived not only five
                      centuries
                    </p>
                    <Link to="/blogdetails">
                      Read More
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      </div>

      <Footer />
    </div>
  );
}
