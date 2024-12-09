export const validateCustomerForm = (form) => {
  const errors = {};

  // Name validation
  if (!form.name.trim()) {
    errors.name = "Customer name is required.";
  }

  // DOB validation
  if (!form.dob.trim()) {
    errors.dob = "Date of Birth is required.";
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(form.dob)) {
    errors.dob = "Date of Birth must be in yyyy-MM-dd format.";
  }

  // Address validation
  if (!form.address.trim()) {
    errors.address = "Customer address is required.";
  }

  // Contact validation
  if (!form.contact.trim()) {
    errors.contact = "Customer contact is required.";
  } else if (!/^\d{10}$/.test(form.contact)) {
    errors.contact = "Contact must be a valid 10-digit number.";
  }

  // Disease validation
  if (!form.disease.trim()) {
    errors.disease = "Disease information is required.";
  } else if (!["Yes", "No"].includes(form.disease.trim())) {
    errors.disease = 'Disease must be "Yes" or "No".';
  }

  // Surgery validation
  if (!form.surgery.trim()) {
    errors.surgery = "Surgery information is required.";
  } else if (!["Yes", "No"].includes(form.surgery.trim())) {
    errors.surgery = 'Surgery must be "Yes" or "No".';
  }

  // Policy ID validation
  if (!form.policyId.trim()) {
    errors.policyId = "Policy ID is required.";
  }

  return errors;
};

export const validateCustomerSignup = (form) => {
  const errors = {};

  // Name validation
  if (!form.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Email is invalid";
  }

  // Password validation
  if (!form.password.trim()) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};