import React from "react";
import {  Route, Routes } from "react-router-dom";

import About from "../components/layout/About";
import Contact from "../components/layout/Contact";

import Homepage from "./Homepage";


import Services from "./Services";
import ServicesDetails from "./ServicesDetails";
import SignIn from "../components/loginProfile/SignIn";
import Team from "./Team";
import TermsAndConditions from "./TermsAndConditions";
import Testimonials from "./Testimonials";
import NoPage from "../components/layout/NoPage";
import RegCustomer from "../components/loginProfile/RegCustomer";
import RegHelper from "../components/loginProfile/RegHelper";
import Register from "../components/loginProfile/Register";


export default function Main() {
  return (
    <div>
      
      {/* <Header/> */}
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} /> 
          
         
       
          
          <Route path="/regcustomer" element={<RegCustomer/>} />
          <Route path="/reghelper" element={<RegHelper/>} />
          
          <Route path="/team" element={<Team />} />
         
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails" element={<ServicesDetails />} />
     
          <Route path="/nopagefound" element={<NoPage />} />
          <Route path="*" element={<NoPage/>} />

        </Routes>
      </div>
    </div>
  );
}

