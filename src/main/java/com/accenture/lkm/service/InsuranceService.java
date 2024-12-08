package com.accenture.lkm.service;

import com.accenture.lkm.dao.InsuranceDAO;
import com.accenture.lkm.dto.CustomerDTO;
import com.accenture.lkm.dto.InsurancePolicyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

import java.util.List;

@Service
public class InsuranceService {

    @Autowired
    private InsuranceDAO insuranceDAO;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    private static final String queueName = "myQueue";

    // Method to insert a policy
    public InsurancePolicyDTO insertPolicy(InsurancePolicyDTO insurancePolicyDTO) {
        return insuranceDAO.insertPolicy(insurancePolicyDTO);
    }

    // Method to get all policies
    public List<InsurancePolicyDTO> getAllPolicies() {
        return insuranceDAO.getAllPolicies();
    }

    // Method to apply a policy
    public CustomerDTO applyPolicy(CustomerDTO customerDTO) {
        CustomerDTO appliedCustomer = insuranceDAO.applyPolicy(customerDTO);
        rabbitTemplate.convertAndSend(queueName, appliedCustomer);
        return appliedCustomer;
    }

    // Method to get all customer policies
    public List<CustomerDTO> getAllCustomerPolicies() {
        return insuranceDAO.getAllCustomerPolicies();
    }

    // Method to approve a customer policy
    public void approveCustomerPolicy(Integer customerId) {
        CustomerDTO customer = insuranceDAO.getCustomerById(customerId);  // Use getCustomerById method

        boolean hasUndergoneSurgery = customer.getCustomerSurgery().equalsIgnoreCase("Yes");
        boolean hasDisease = customer.getCustomerDiseases().equalsIgnoreCase("Yes");
        boolean isLifePolicy = insuranceDAO.getByInsurancePolicyId(customer.getPolicyId())
                .getPolicyType()
                .equalsIgnoreCase("Life");

        if (isLifePolicy && hasUndergoneSurgery && hasDisease) {
            customer.setPolicyStatus("Rejected");
        } else {
            customer.setPolicyStatus("Active");
        }
        insuranceDAO.approveCustomerPolicy(customerId);
    }

    // Method to get the customer policy status
    public String getCustomerPolicyStatus(Integer customerId) {
        return insuranceDAO.getCustomerPolicyStatus(customerId);  // Return policy status
    }
}