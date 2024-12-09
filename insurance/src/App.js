import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomerPortal from "./components/CustomerPortal";
import ManagerPortal from "./components/ManagerPortal";
import CustomerLogin from "./components/CustomerLogin"; 
import CustomerSignup from "./components/CustomerSignup"; 
import ManagerLogin from "./components/ManagerLogin"; 
import CustomerOptions from "./components/CustomerOptions";
import CustomerPolicyList from "./components/CustomerPolicyList";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<CustomerOptions />} /> 
      <Route path="/manager" element={<ManagerPortal />} />
      <Route path="/customer/login" element={<CustomerLogin />} />
      <Route path="/customer/signup" element={<CustomerSignup />} />
      <Route path="/customer/policies" element={<CustomerPolicyList />} />
      <Route path="/customer/portal" element={<CustomerPortal />} />
      <Route path="/manager/login" element={<ManagerLogin />} /> 
    </Routes>
  </Router>
);

export default App;
