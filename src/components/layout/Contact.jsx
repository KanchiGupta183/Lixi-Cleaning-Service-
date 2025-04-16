import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevrons-right" />
                  </li>
                  <li>
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="location-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="bx bx-phone-call" />
                <h3>Contact Number</h3>
                <span>Dial And Get Solution:</span>
                <a href="tel:+123456789">+91 9234345349</a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="bx bx-location-plus" />
                <h3>Our Location</h3>
                <span>Find Our Office:</span>
                <span>Noida sec 63, Noida Up India</span>
              </div>
            </div>
            <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
              <div className="location-item">
                <i className="bx bx-mail-send" />
                <h3>Our Email</h3>
                <span>Mail Us Anytime:</span>
                <a href="mailto:kanchigupta@gmail.com">
                  <span
                    className="__cf_email__"
                    data-cfemail="1871767e775874716071367b7775"
                  >
                   kanchigupta@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
          <form id="contactForm">
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    data-error="Please enter your name"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    data-error="Please enter your email"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    required
                    data-error="Please enter your number"
                    className="form-control"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    className="form-control"
                    required
                    data-error="Please enter your subject"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-12 col-lg-12">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols={30}
                    rows={8}
                    required
                    data-error="Write your message"
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <div className="form-check agree-label">
                    <input
                      name="gridCheck"
                      defaultValue="I agree to the terms and privacy policy."
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Accept{" "}
                      <a href="terms-and-conditions">Terms &amp; Conditions</a>{" "}
                      And <a href="privacy-policy.html">Privacy Policy.</a>
                    </label>
                    <div className="help-block with-errors gridCheck-error" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12">
                <button type="submit" className="cmn-btn btn">
                  Send Message
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="map-area pb-100">
        <div className="container-fluid">
       
        <iframe
    title="contacthere"
    id="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923535496!2d77.23701346870612!3d28.522404034914928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1742409348923!5m2!1sen!2sin" 
    allowFullScreen
    aria-hidden="false"
    tabIndex="0"
></iframe>

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
