package com.accenture.lkm.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class CustomerDTO {

    @NotNull
    private Integer customerId;

    @NotEmpty
    private String customerName;

    @NotNull
    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}")
    private String customerDateofbirth;

    @NotEmpty
    private String customerAddress;

    @NotEmpty
    private String customerContact;

    @NotEmpty
    private String customerDiseases;

    @NotEmpty
    private String customerSurgery;

    @NotNull
    private Integer policyId;

    @NotEmpty
    private String policyStatus;

    // Getters and setters
    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerDateofbirth() {
        return customerDateofbirth;
    }

    public void setCustomerDateofbirth(String customerDateofbirth) {
        this.customerDateofbirth = customerDateofbirth;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerContact() {
        return customerContact;
    }

    public void setCustomerContact(String customerContact) {
        this.customerContact = customerContact;
    }

    public String getCustomerDiseases() {
        return customerDiseases;
    }

    public void setCustomerDiseases(String customerDiseases) {
        this.customerDiseases = customerDiseases;
    }

    public String getCustomerSurgery() {
        return customerSurgery;
    }

    public void setCustomerSurgery(String customerSurgery) {
        this.customerSurgery = customerSurgery;
    }

    public Integer getPolicyId() {
        return policyId;
    }

    public void setPolicyId(Integer policyId) {
        this.policyId = policyId;
    }

    public String getPolicyStatus() {
        return policyStatus;
    }

    public void setPolicyStatus(String policyStatus) {
        this.policyStatus = policyStatus;
    }
}