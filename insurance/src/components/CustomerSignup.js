import React, { useState } from "react";
import { customerSignup } from "../services/api";
import { useNavigate } from "react-router-dom";

const CustomerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await customerSignup({ name, email, password });
      alert("Signup successful!");
      navigate("/customer/login");
    } catch (error) {
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <div>
      <h2>Customer Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default CustomerSignup;
