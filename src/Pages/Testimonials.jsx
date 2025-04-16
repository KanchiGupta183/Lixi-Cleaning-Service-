import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Testimonials() {
  return (
    <div>
      <Header />
      <div>
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="title-item">
                  <h2>Testimonials</h2>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <i className="bx bx-chevrons-right" />
                    </li>
                    <li>
                      <span>Testimonials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="review-area two ptb-100">
          <div className="review-shape">
            <img src="assets/img/home-one/banner-shape6.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div className="review-item">
                  <img src="assets/img/home-one/review1.jpg" alt="Review" />
                  <h3>Jason Doe</h3>
                  <span>CEO</span>
                  <ul>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                  </ul>
                  <p>
                    There are many variations of passages of the Lorem Ipsum
                    available an, but the majority have a suffered alteration in
                    some form, by the injected a humour, or randomised words.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="review-item">
                  <img src="assets/img/home-one/review2.jpg" alt="Review" />
                  <h3>Alina Decros</h3>
                  <span>Manager</span>
                  <ul>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt quis quaerat eius ducimus officia aut vitae, vel
                    repudiandae, accusantium beatae alias, aliquam consequuntur.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="review-item">
                  <img src="assets/img/home-one/review3.jpg" alt="Review" />
                  <h3>Jac Jacson</h3>
                  <span>Director</span>
                  <ul>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                  </ul>
                  <p>
                    There are many variations of passages of the Lorem Ipsum
                    available an, but the majority have a suffered alteration in
                    some form, by the injected a humour, or randomised words.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="review-item">
                  <img src="assets/img/home-one/review4.jpg" alt="Review" />
                  <h3>Micheal Smith</h3>
                  <span>Engineer</span>
                  <ul>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                    <li>
                      <i className="bx bxs-star checked" />
                    </li>
                  </ul>
                  <p>
                    There are many variations of passages of the Lorem Ipsum
                    available an, but the majority have a suffered alteration in
                    some form, by the injected a humour, or randomised words.
                  </p>
                </div>
              </div>
            </div>
            <div className="pagination-area">
              <ul>
                <li>
                  <a href="#ijd">Prev</a>
                </li>
                <li>
                  <a href="#ujjj">1</a>
                </li>
                <li>
                  <a href="#duje">2</a>
                </li>
                <li>
                  <a href="#lkd">3</a>
                </li>
                <li>
                  <a href="#ikjkm">Next</a>
                </li>
              </ul>
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
