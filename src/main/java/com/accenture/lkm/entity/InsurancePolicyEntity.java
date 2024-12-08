package com.accenture.lkm.entity;

import javax.persistence.*;

@Entity
@Table(name = "insurancepolicy")
public class InsurancePolicyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "policy_id")
    private Integer policyId;

    @Column(name = "policy_type", nullable = false)
    private String policyType;

    @Column(name = "policy_coverage_amount", nullable = false)
    private Double policyCoverageAmount;

    @Column(name = "policy_premium", nullable = false)
    private Double policyPremium;

    @Column(name = "policy_term_in_years", nullable = false)
    private Integer policyTermInYears;

    // Getters and setters
    public Integer getPolicyId() {
        return policyId;
    }

    public void setPolicyId(Integer policyId) {
        this.policyId = policyId;
    }

    public String getPolicyType() {
        return policyType;
    }

    public void setPolicyType(String policyType) {
        this.policyType = policyType;
    }

    public Double getPolicyCoverageAmount() {
        return policyCoverageAmount;
    }

    public void setPolicyCoverageAmount(Double policyCoverageAmount) {
        this.policyCoverageAmount = policyCoverageAmount;
    }

    public Double getPolicyPremium() {
        return policyPremium;
    }

    public void setPolicyPremium(Double policyPremium) {
        this.policyPremium = policyPremium;
    }

    public Integer getPolicyTermInYears() {
        return policyTermInYears;
    }

    public void setPolicyTermInYears(Integer policyTermInYears) {
        this.policyTermInYears = policyTermInYears;
    }
}