// api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// Customer API functions
export const getAllPolicies = () => axios.get(`${API_BASE_URL}/policies`); 

export const addPolicy = (policy) =>
  axios.post(`${API_BASE_URL}/addPolicy`, policy);

export const applyPolicy = async (data) => {
  // Simulate API call for applying policy
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data });
    }, 1000);
  });
};

export const getPolicyStatus = async (policyId) => {
  // Simulate API call for fetching policy status
  const statuses = ["Pending", "Approved", "Rejected"];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 1000);
  });
};

// Manager API functions
export const approvePolicy = (customerId) => {
  return axios.put(`${API_BASE_URL}/approvePolicy/${customerId}`);
};

export const getAllCustomers = () => {
  return axios.get(`${API_BASE_URL}/customers`);
};