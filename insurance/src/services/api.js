import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// Customer API functions
export const getAllPolicies = () => axios.get(`${API_BASE_URL}/policies`);

export const addPolicy = (policy) =>
  axios.post(`${API_BASE_URL}/addPolicy`, policy);

export const applyPolicy = (policyData) => { 
  return axios.post(`${API_BASE_URL}/applyPolicy`, policyData); 
};

export const getPolicyStatus = (policyId) => { 
  return axios.get(`${API_BASE_URL}/policy/${policyId}/status`); 
};


// export const customerSignup = (userData) => {
//   return axios.post(`${API_BASE_URL}/customer/signup`, userData); //Remember to replace the placeholder API endpoints (/customer/sign up)with your actual backend API endpoints.
// };

// export const customerLogin = (credentials) => {
//   return axios.post(`${API_BASE_URL}/customer/login`, credentials); //Remember to replace the placeholder API endpoints (/customer/login)with your actual backend API endpoints.
// };

// Manager API functions
export const approvePolicy = (customerId) => {
  return axios.put(`${API_BASE_URL}/approvePolicy/${customerId}`);
};

export const getAllCustomers = () => {
  return axios.get(`${API_BASE_URL}/customers`);
};

// export const managerLogin = (credentials) => {
//   return axios.post(`${API_BASE_URL}/manager/login`, credentials);//Remember to replace the placeholder API endpoints (/manager/login)with your actual backend API endpoints.
// };