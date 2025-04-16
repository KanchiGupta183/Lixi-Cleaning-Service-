import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function TermsAndConditions() {
  return (
    <div>
      <Header />
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Terms &amp; Conditions</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevrons-right" />
                  </li>
                  <li>
                    <span>Terms &amp; Conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rules-area ptb-100">
        <div className="container">
          <div className="rules-item">
            <h3>1 - Agreement Of User</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              porro amet consequuntur in voluptatum perspiciatis, nostrum
              deserunt quos accusamus, eos optio recusandae eius facilis
              voluptatibus expedita numquam eaque praesentium laboriosam.
            </p>
            <h3>2 - Essential Rules</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. As opposed to using
              'Content here, content here.
            </p>
            <h3>3 - Understanding</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <h3>4 - Dealing System</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. But the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <h3>5 - Contact</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
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
