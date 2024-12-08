package com.accenture.lkm.controller;

import com.accenture.lkm.dto.CustomerDTO;
import com.accenture.lkm.dto.InsurancePolicyDTO;
import com.accenture.lkm.service.InsuranceService;
import com.accenture.lkm.service.MessageConsumerService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/insurance")
public class InsuranceController {

    @Autowired
    private InsuranceService insuranceService;

    @Autowired
    private MessageConsumerService messageConsumerService;

    @Autowired
    private ObjectMapper objectMapper;  // Add ObjectMapper to deserialize JSON

    // Method to insert a policy
    @PostMapping("/policies")
    public ResponseEntity<InsurancePolicyDTO> insertPolicy(@RequestBody InsurancePolicyDTO insurancePolicyDTO) {
        InsurancePolicyDTO insertedPolicy = insuranceService.insertPolicy(insurancePolicyDTO);
        return new ResponseEntity<>(insertedPolicy, HttpStatus.CREATED);
    }

    // Method to get all policies
    @GetMapping("/policies")
    public ResponseEntity<List<InsurancePolicyDTO>> getAllPolicies() {
        List<InsurancePolicyDTO> policies = insuranceService.getAllPolicies();
        return new ResponseEntity<>(policies, HttpStatus.OK);
    }

    // Method to apply a policy
    @PostMapping("/customers")
    public ResponseEntity<?> applyPolicy(@Valid @RequestBody CustomerDTO customerDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        CustomerDTO appliedCustomer = insuranceService.applyPolicy(customerDTO);
        return new ResponseEntity<>(appliedCustomer, HttpStatus.CREATED);
    }

    // Method to get all customer policies
    @GetMapping("/customers/policies")
    public ResponseEntity<List<CustomerDTO>> getAllCustomerPolicies() {
        List<CustomerDTO> customerPolicies = insuranceService.getAllCustomerPolicies();
        return new ResponseEntity<>(customerPolicies, HttpStatus.OK);
    }

    // Method to approve a customer policy
    @PutMapping("/customers/policies/approve")
    public ResponseEntity<List<CustomerDTO>> approveCustomerPolicy() {
        List<String> messages = messageConsumerService.getAllMessages();
        List<CustomerDTO> pendingCustomers = new ArrayList<>();  // Initialize pendingCustomers

        for (String message : messages) {
            try {
                CustomerDTO customerDTO = objectMapper.readValue(message, CustomerDTO.class);
                insuranceService.approveCustomerPolicy(customerDTO.getCustomerId());
                pendingCustomers.add(customerDTO);
                messageConsumerService.removeMessage(message);
            } catch (Exception e) {
                // Handle deserialization error
                e.printStackTrace();
            }
        }
        return new ResponseEntity<>(pendingCustomers, HttpStatus.OK);
    }

    // Method to get the customer policy status
    @GetMapping("/customers/{customerId}/status")
    public ResponseEntity<String> getCustomerPolicyStatus(@PathVariable Integer customerId) {
        String status = insuranceService.getCustomerPolicyStatus(customerId);
        return new ResponseEntity<>(status, HttpStatus.OK);
    }

    // Method to get all customers whose policy status is pending
    @GetMapping("/customers/policies/pending")
    public ResponseEntity<List<CustomerDTO>> getAllCustomerInsurancesPending() {
        List<String> pendingMessages = messageConsumerService.getAllMessages();
        List<CustomerDTO> pendingCustomers = new ArrayList<>();  // Initialize pendingCustomers
        for (String message : pendingMessages) {
            try {
                CustomerDTO customerDTO = objectMapper.readValue(message, CustomerDTO.class);
                pendingCustomers.add(customerDTO);
            } catch (Exception e) {
                // Handle deserialization error
                e.printStackTrace();
            }
        }
        return new ResponseEntity<>(pendingCustomers, HttpStatus.OK);
    }
}