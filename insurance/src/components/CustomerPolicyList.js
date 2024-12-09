import React, { useState, useEffect } from "react";
import "../styles/customer-policy-list.css"; 
import { getAllPolicies } from "../services/api";
const CustomerPolicyList = () => {
  const [policies, setPolicies] = useState([]); // Keep this for future data

  useEffect(() => {
    // This effect will be used to fetch policies when the backend is ready
    /*
    const fetchPolicies = async () => { 
      try {
        const response = await getAllPolicies();
        if (response.status === 200) {
          setPolicies(response.data);
        } else {
          console.error("Failed to fetch policies:", response.status);
        }
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    };

    fetchPolicies();
    */
  }, []);

  return (
    <div>
      <h2>Insurance Policy List</h2>
      <table className="policy-table"> {/* Table is always rendered */}
        <thead>
          <tr>
            <th>Policy Id</th>
            <th>Policy Type</th>
            <th>Policy Coverage Amount</th>
            <th>Policy Premium</th>
            <th>Policy Term In Years</th>
          </tr>
        </thead>
        <tbody>
          {/*  No data rows until policies are fetched */}
          {policies.map((policy) => ( 
            <tr key={policy.id}>
              <td>{policy.id}</td>
              <td>{policy.type}</td>
              <td>{policy.coverageAmount}</td>
              <td>{policy.premium}</td>
              <td>{policy.termInYears}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {policies.length === 0 && ( 
        <p>No policies added yet.</p> 
      )}
    </div>
  );
};

export default CustomerPolicyList;