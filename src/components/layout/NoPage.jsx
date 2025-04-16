import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function NoPage() {
  return (
    <div>
      <Header />

      {/* Start error page */}
      <div className="error-area">
        <div className="error-item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="error-img">
                  <img src="assets/img/error-main.png" alt="Error" />
                  <img src="assets/img/error-shape1.png" alt="Shape" />
                  <img src="assets/img/error-shape2.png" alt="Shape" />
                  <img src="assets/img/error-shape3.png" alt="Shape" />
                </div>
                <h2>Error 404 : Page Not Found</h2>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <Link to="/">
                  <Button variant="contained" size="medium" color="success" className="default-btn btn-style-one btn-style-three">
                    Return To Home Page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End error page */}
      <Footer />
    </div>
  );
}
