package com.accenture.lkm.dto;

public class InsurancePolicyDTO {

    private Integer policyId;
    private String policyType;
    private Double policyCoverageAmount;
    private Double policyPremium;
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