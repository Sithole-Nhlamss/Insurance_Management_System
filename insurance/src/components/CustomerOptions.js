// CustomerOptions.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/customer-options.css";

const CustomerOptions = () => {
  return (
    <div className="customer-options-container">
      <h2>Welcome to ABC Insurance!</h2>
      <br></br>
      <div className="options">
        <Link className="option login" to="/customer/portal">
          Customer Portal
        </Link>
        {/* <Link className="option signup" to="/customer/signup">
          Signup
        </Link> */}
        <Link className="option view-policies" to="/customer/policies"> 
          View Policies
        </Link>
      </div>
    </div>
  );
};

export default CustomerOptions;