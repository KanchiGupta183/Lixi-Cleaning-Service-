import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Services() {
  return (
    <div>
      <Header />
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Services</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevrons-right" />
                  </li>
                  <li>
                    <span>Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="service-area ptb-100">
        <div className="container">
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
                  typesetting industry. It has survived not only five centuries
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
                  typesetting industry. It has survived not only five centuries
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
                  typesetting industry. It has survived not only five centuries
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
                  typesetting industry. It has survived not only five centuries
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
                  typesetting industry. It has survived not only five centuries
                </p>
                <Link
                  to="/servicedetails"
                  className="service-link"
                  href="service-details.html"
                >
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
                  typesetting industry. It has survived not only five centuries
                </p>
                <Link to="/servicedetails" className="service-link">
                  Learn More
                  <i className="bx bx-right-arrow-alt" />
                </Link>
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
      <Footer />
    </div>
  );
}
