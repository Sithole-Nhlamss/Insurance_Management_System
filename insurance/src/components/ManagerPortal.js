
import React, { useState, useEffect } from "react";
import { addPolicy, getAllPolicies, approvePolicy } from "../services/api";

const ManagerPortal = () => {
  const [policies, setPolicies] = useState([]);
  const [policy, setPolicy] = useState({ name: "", terms: "", premium: "" });
  const [selectedCustomerId, setSelectedCustomerId] = useState("");

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    try {
      const response = await getAllPolicies();
      setPolicies(response.data);
    } catch (error) {
      alert("Error fetching policies!");
    }
  };

  const handleAddPolicy = async () => {
    try {
      await addPolicy(policy);
      alert("Policy added successfully!");
      loadPolicies();
    } catch (error) {
      alert("Error adding policy!");
    }
  };

  const handleApprovePolicy = async () => {
    if (!selectedCustomerId) {
      alert("Please select a customer.");
      return;
    }
    try {
      await approvePolicy(selectedCustomerId);
      alert("Policy approved successfully!");
      loadPolicies();
    } catch (error) {
      alert("Error approving policy!");
    }
  };

  return (
    <div>
      <h2>Manager Portal</h2>
      <button onClick={loadPolicies}>Refresh Policies</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Premium</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.premium}</td>
              <td>
                <button onClick={() => setSelectedCustomerId(p.id)}>
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerPortal;
