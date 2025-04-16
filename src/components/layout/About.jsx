import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  return (
    <>
      <div>
        <Header/>
        <div>
          <div className="page-title-area">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="title-item">
                    <h2>About</h2>
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <i className="bx bx-chevrons-right" />
                      </li>
                      <li>
                        <span>About</span>
                      </li>
                    </ul>
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
                  <div className="choose-contact two">
                    <div className="section-title">
                      <span className="sub-title">About Us</span>
                      <h2>Certified Cleaning Service Company Over 15 years</h2>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-area four">
            <div className="counter-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                      <h3>
                        <span className="odometer" data-count="15">
                          15
                        </span>
                      </h3>
                      <p>Years Experienced</p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                      <h3>
                        <span className="odometer" data-count={156}>
                          20
                        </span>
                      </h3>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                      <h3>
                        <span className="odometer" data-count={756}>
                          00
                        </span>
                      </h3>
                      <p>Project Completed</p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                      <h3>
                        <span className="odometer" data-count={22}>
                          00
                        </span>
                      </h3>
                      <p>Active Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="watch-area ptb-100">
            <div className="container">
              <div className="section-title">
                <h2>Watch The Full Video To Know More About Us</h2>
              </div>
              <div className="watch-item">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="video-wrap">
                      <a
                        href="https://www.youtube.com/watch?v=Dviu-D3Fijo"
                        className="popup-youtube"
                      >
                        <i className="bx bx-play" />
                      </a>
                    </div>
                    <div className="watch-content">
                      <h3>We Love The Work</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="love-area pb-100">
            <div className="container">
              <div className="love-item">
                <div className="section-title">
                  <h2>Why You Love To Work With Us</h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check" />
                    We Provide Qualified &amp; Expert
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Safe Work &amp; Satisfaction
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Quick Response &amp; 24/7 Support
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Less Time Done More
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
        <Footer/>
      </div>
    </>
  );
}
