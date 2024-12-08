package com.accenture.lkm.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "customer")
public class CustomerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "customer_id")
    private Integer customerId;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(name = "customer_dateofbirth", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date customerDateofbirth;

    @Column(name = "customer_address", nullable = false)
    private String customerAddress;

    @Column(name = "customer_contact", nullable = false)
    private String customerContact;

    @Column(name = "disease_if_yes_specify", nullable = false)
    private String customerDisease;

    @Column(name = "surgery_if_yes_specify", nullable = false)
    private String customerSurgery;

    @Column(name = "policy_id", nullable = false)
    private Integer policyId;

    @Column(name = "policy_status", nullable = false)
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

    public Date getCustomerDateofbirth() {
        return customerDateofbirth;
    }

    public void setCustomerDateofbirth(Date customerDateofbirth) {
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

    public String getCustomerDisease() {
        return customerDisease;
    }

    public void setCustomerDisease(String customerDisease) {
        this.customerDisease = customerDisease;
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