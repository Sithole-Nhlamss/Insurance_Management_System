import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/customer-signup.css";

const CustomerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Implement customer signup API call here
    // This is where you'll make the API call to your backend
    // to create a new customer account. For now, we'll just
    // simulate a successful signup and redirect to the
    // customer portal.

    // Simulate successful signup
    // Replace this with your actual API call
    /*
    try {
      const response = await fetch("/api/customer/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Signup successful, redirect to customer portal
        alert("Signup successful! You can now log in.");
        navigate("/customer/portal"); // Redirect to customer portal
      } else {
        // Handle signup error (e.g., display error message)
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
    */

    alert("Signup successful!"); // Simulated success
    navigate("/customer/portal"); // Redirect to customer portal
  };

  return (
    <div className="body">
      <h2>Customer Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default CustomerSignup;