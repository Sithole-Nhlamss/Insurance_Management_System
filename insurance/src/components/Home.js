// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => (
  <div>
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ABC Insurance</h1>
        <p className="hero-tagline">
          Protecting what matters most, with you every step of the way.
        </p>
        <div className="hero-buttons">
          <Link className="button primary" to="/customer">
            Customer Portal
          </Link>
          <Link className="button secondary" to="/manager/login">
            Manager Portal
          </Link>
        </div>
      </div>
    </section>

    <section className="features">
      <div className="feature">
        <i className="fas fa-shield-alt"></i> {/* Example icon */}
        <h3>Comprehensive Coverage</h3>
        <p>
          We offer a wide range of insurance plans to meet your unique needs.
        </p>
      </div>
      <div className="feature">
        <i className="fas fa-user-friends"></i>
        <h3>Dedicated Support</h3>
        <p>Our friendly team is here to assist you 24/7.</p>
      </div>
      <div className="feature">
        <i className="fas fa-file-invoice-dollar"></i>
        <h3>Easy Claims</h3>
        <p>
          File a claim online or over the phone with our hassle-free process.
        </p>
      </div>
    </section>
  </div>
);

export default Home;
