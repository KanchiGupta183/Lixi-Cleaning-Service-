import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function ServicesDetails() {
  return (
    <div>
      <Header />
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Service Details</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevrons-right" />
                  </li>
                  <li>
                    <span>Service Details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="details-item">
                <div className="outer">
                  <div id="big" className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details2.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details1.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details3.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details4.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details1.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="thumbs" className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details6.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details5.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details7.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details8.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb-item">
                        <img
                          src="assets/img/service-details5.jpg"
                          alt="Thumb"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-project">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="details-project-inner">
                        <h3>The Requirements</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here'.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="details-project-inner">
                        <h3>Project Management</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here'.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="details-project-inner">
                        <h3>Service System And Quality</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here'.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="details-project-inner">
                        <h3>Our Full Service System</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here'.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-choose">
                  <h3>Why Choose Us</h3>
                  <ul>
                    <li>
                      <i className="bx bx-check-double" />
                      Deep Cleaning Service
                    </li>
                    <li>
                      <i className="bx bx-check-double" />
                      Full Equipment
                    </li>
                    <li>
                      <i className="bx bx-check-double" />
                      Disinfection Service
                    </li>
                    <li>
                      <i className="bx bx-check-double" />
                      Professional Sanitizing
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <img
                        src="assets/img/service-details9.jpg"
                        alt="Service Details"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <img
                        src="assets/img/service-details10.jpg"
                        alt="Service Details"
                      />
                    </div>
                  </div>
                  <h3>How To Clean Everything By Lixi Team</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. The point of using Lorem Ipsum is that it
                    has a more-or-less.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget-area">
                <div className="search widget-item">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <button type="submit" className="btn">
                      <i className="bx bx-search" />
                    </button>
                  </form>
                </div>
                <div className="cat widget-item">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <Link to="/carwashing">
                        <i className="bx bxs-car-wash" />
                        Car Washing
                      </Link>
                    </li>
                    <li>
                      <Link to="/housecleaning">
                        <i className="bx bx-home-alt" />
                        House Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link to="/plumbing">
                        <i className="bx bx-bath" />
                        Plumbing Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/officecleaning">
                        <i className="bx bx-building-house" />
                        Office Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link to="/carpetcleaning">
                        <i className="bx bx-door-open" />
                        Carpet Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link to="/windowcleaning">
                        <i className="bx bx-home-circle" />
                        Window Cleaning
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="related widget-item">
                  <h3>Related Post</h3>
                  <div className="related-inner">
                    <ul className="align-items-center">
                      <li>
                        <img
                          src="assets/img/service-details12.jpg"
                          alt="Details"
                        />
                      </li>
                      <li>
                        <Link to="/officecleaning">Office Cleaning</Link>
                        <span>20 July</span>
                      </li>
                    </ul>
                  </div>
                  <div className="related-inner">
                    <ul className="align-items-center">
                      <li>
                        <img
                          src="assets/img/service-details13.jpg"
                          alt="Details"
                        />
                      </li>
                      <li>
                        <Link to="/housecleaning">House Cleaning</Link>
                        <span>21 July</span>
                      </li>
                    </ul>
                  </div>
                  <div className="related-inner">
                    <ul className="align-items-center">
                      <li>
                        <img
                          src="assets/img/service-details14.jpg"
                          alt="Details"
                        />
                      </li>
                      <li>
                        <Link to="/windowcleaning">Window Cleaning</Link>
                        <span>22 July</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="newsletter widget-item">
                  <h3>Newsletter</h3>
                  <form>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <button type="submit" className="btn cmn-btn">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="tags widget-item">
                  <h3>Tags</h3>
                  <ul>
                    <li>
                      <Link to="/cleaner">Cleaner</Link>
                    </li>
                    <li>
                      <Link to="/corporate">Corporate</Link>
                    </li>
                    <li>
                      <Link to="/agency">Agency</Link>
                    </li>
                    <li>
                      <Link to="/office">Office</Link>
                    </li>
                    <li>
                      <Link to="/kitchen">Kitchen</Link>
                    </li>
                    <li>
                      <Link to="/washing">Deep</Link>
                    </li>
                    <li>
                      <Link to="/covid">Sanitizer</Link>
                    </li>
                  </ul>
                </div>
                <div className="call widget-item">
                  <h3>Call Now</h3>
                  <a href="tel:+0123456789">+0123-456-789</a>
                </div>
              </div>
            </div>
          </div>
          <div className="watch-area">
            <div className="section-title">
              <h2>We Serve To People Like It’s Our Commitment</h2>
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
                    <h3>House Cleaning</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
