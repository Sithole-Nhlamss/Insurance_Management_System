import React, { useState, useEffect } from "react";
import { addPolicy, getAllPolicies } from "../services/api";
import "../styles/manager-portal.css"; 

const ManagerPortal = () => {
  const [policy, setPolicy] = useState({ name: "", terms: "", premium: "" });
  const [policies, setPolicies] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicy({ ...policy, [name]: value });
  };

  const handleAddPolicy = async () => {
    try {
      const response = await addPolicy(policy);
      alert(`Policy added successfully! ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert("Error adding policy!");
    }
  };

  const handleViewPolicies = async () => {
    try {
      const response = await getAllPolicies();
      setPolicies(response.data);
    } catch (error) {
      alert("Error fetching policies!");
    }
  };

  const handleApprovePolicy = async () => {
    // TODO: Implement API call to approve policy for selectedCustomerId
    alert(`Approving policy for customer ID: ${selectedCustomerId}`);
  };

  // Fetch policies on component mount
  useEffect(() => {
    handleViewPolicies();
  }, []);

  return (
    <div>
      <h1>Manager Portal</h1>

      {/* Approve Customer Insurance */}
      <div>
        <h2>Approve Customer Policy</h2>
        <select onChange={(e) => setSelectedCustomerId(e.target.value)}>
          <option value="">Select Customer</option>
          {policies.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <button onClick={handleApprovePolicy} disabled={!selectedCustomerId}>
          Approve Policy
        </button>
      </div>

      {/* Add Policy Section */}
      <div>
        <h2>Add Policy</h2>
        <input
          type="text"
          name="name"
          placeholder="Policy Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="terms"
          placeholder="Terms"
          onChange={handleChange}
        />
        <input
          type="text"
          name="premium"
          placeholder="Premium"
          onChange={handleChange}
        />
        <button onClick={handleAddPolicy}>Add Policy</button>
      </div>

      <h2>Get Policy Details of all Clients</h2>
      {/* View Policies Section */}
      <button onClick={handleViewPolicies}>Click</button>

      <table border="1">
        <thead>
          <tr>
            <th>Client Id</th>
            <th>Client Name</th>
            <th>Client DOB</th>
            <th>Client Address</th>
            <th>Client Contact</th>
            <th>Client Disease</th>
            <th>Client Surgery</th>
            <th>Policy Status</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.dob}</td>
              <td>{p.address}</td>
              <td>{p.contact}</td>
              <td>{p.disease}</td>
              <td>{p.surgery}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerPortal;
