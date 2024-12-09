import React, { useState } from "react";
import { applyPolicy, getPolicyStatus } from "../services/api";
import { validateCustomerForm } from "../utils/validation";
import "../styles/customer-portal.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";


const CustomerPortal = () => {
  // State for applying insurance
  const [form, setForm] = useState({
    name: "",
    dob: "",
    address: "",
    contact: "",
    disease: "",
    surgery: "",
    policyId: "",
  });

  const [contact, setContact] = useState("");

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // State for checking policy status
  const [policyIdToCheck, setPolicyIdToCheck] = useState("");
  const [policyStatus, setPolicyStatus] = useState("");
  const [statusError, setStatusError] = useState("");

  /** Handle input changes */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleContactChange = (value) => {
    setContact(value);
    setForm({ ...form, contact: value });
  };

  /** Submit form to apply insurance */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateCustomerForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear validation errors if valid

    // Submit data
    try {
      const response = await applyPolicy(form); // Assume API call to submit data
      setSuccessMessage("Policy applied successfully!");
      alert(`Details submitted:\n${JSON.stringify(response.data, null, 2)}`);
      setForm({
        name: "",
        dob: "",
        address: "",
        contact: "",
        disease: "",
        surgery: "",
        policyId: "",
      });
    } catch (error) {
      alert("Error while applying policy.");
    }
  };

  /** Check policy status */
  const handleCheckStatus = async (e) => {
    e.preventDefault();

    if (!policyIdToCheck) {
      setStatusError("Customer ID is required to check status.");
      setPolicyStatus("");
      return;
    }

    setStatusError(""); // Clear error if valid

    try {
      const status = await getPolicyStatus(policyIdToCheck); // Assume API call to fetch status
      setPolicyStatus(`Policy Status: ${status}`);
    } catch (error) {
      setPolicyStatus("");
      setStatusError("Error fetching policy status. Please try again.");
    }
  };

  return (
    <div>
      {/* Apply Insurance Form */}
      <div>
        <h2>Apply Insurance</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="dob">Date of Birth (yyyy-mm-dd)</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="contact">Contact</label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="ZA"
              value={contact}
              onChange={handleContactChange}
              error={errors.contact}
              style={{
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label htmlFor="disease">Disease (Yes/No)</label>
            <input
              type="text"
              name="disease"
              value={form.disease}
              onChange={handleChange}
            />
            {errors.disease && <p className="error">{errors.disease}</p>}
          </div>

          <div>
            <label htmlFor="surgery">Surgery (Yes/No)</label>
            <input
              type="text"
              name="surgery"
              value={form.surgery}
              onChange={handleChange}
            />
            {errors.surgery && <p className="error">{errors.surgery}</p>}
          </div>

          <div>
            <label htmlFor="policyId">Policy ID</label>
            <input
              type="text"
              name="policyId"
              value={form.policyId}
              onChange={handleChange}
            />
            {errors.policyId && <p className="error">{errors.policyId}</p>}
          </div>

          <button type="submit">Apply Insurance</button>
        </form>

        {successMessage && <p className="success">{successMessage}</p>}
      </div>

      {/* Check Policy Status */}
      <div style={{ marginTop: "30px" }}>
        <h2>Check Policy Status</h2>
        <form onSubmit={handleCheckStatus}>
          <div>
            <label htmlFor="policyIdToCheck">Enter Customer ID</label>
            <input
              type="text"
              value={policyIdToCheck}
              onChange={(e) => setPolicyIdToCheck(e.target.value)}
            />
            {statusError && <p className="error">{statusError}</p>}
          </div>
          <button type="submit">Check Status</button>
        </form>

        {policyStatus && <p style={{ color: "blue" }}>{policyStatus}</p>}
      </div>
    </div>
  );
};

export default CustomerPortal;

