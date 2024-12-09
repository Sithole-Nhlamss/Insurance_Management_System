import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Implement manager login API call here
    // This is where you'll make the API call to your backend
    // to authenticate the manager. For now, we'll just simulate
    // a successful login and redirect to the manager portal.

    // Simulate successful login
    // Replace this with your actual API call
    /*
    try {
      const response = await fetch("/api/manager/login", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful, redirect to manager portal
        alert("Login successful!");
        navigate("/manager"); 
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
    navigate("/manager"); // Redirect to manager portal
  };

  return (
    <div>
    <h2>Manager Login</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

export default ManagerLogin;