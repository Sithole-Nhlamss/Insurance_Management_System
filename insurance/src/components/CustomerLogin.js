import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/customer-login.css";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Implement customer login API call here
    // This is where you'll make the API call to your backend
    // to authenticate the user. For now, we'll just simulate
    // a successful login and redirect to the customer portal.

    // Simulate successful login
    // Replace this with your actual API call
    /*
    try {
      const response = await fetch("/api/customer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, redirect to customer portal
        alert("Login successful!");
        navigate("/customer/portal");
      } else {
        // Handle login error (e.g., display error message)
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
    */

    alert("Login successful!"); // Simulated success message
    navigate("/customer/portal"); // Redirect to customer portal
  };

  return (
    <div>
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CustomerLogin;