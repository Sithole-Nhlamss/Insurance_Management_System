
import axios from "axios";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: "http://localhost:8080/api", // Update this to match your backend
});

// Customer API Functions
export const customerLogin = (data) => api.post("/customer/login", data);
export const customerSignup = (data) => api.post("/customer/signup", data);
export const applyPolicy = (data) => api.post("/customer/apply", data);
export const getPolicyStatus = (customerId) =>
  api.get(`/customer/status/${customerId}`);

// Manager API Functions
export const managerLogin = (data) => api.post("/manager/login", data);
export const addPolicy = (data) => api.post("/policies", data);
export const getAllPolicies = () => api.get("/policies");
export const approvePolicy = (customerId) =>
  api.put(`/manager/approve/${customerId}`);
export const getAllCustomers = () => api.get("/customers");

// Export the Axios instance
export default api;
