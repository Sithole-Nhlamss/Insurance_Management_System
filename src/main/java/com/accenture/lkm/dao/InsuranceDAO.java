package com.accenture.lkm.dao;

import com.accenture.lkm.dto.CustomerDTO;
import com.accenture.lkm.dto.InsurancePolicyDTO;
import com.accenture.lkm.entity.CustomerEntity;
import com.accenture.lkm.entity.InsurancePolicyEntity;
import com.accenture.lkm.repository.CustomerRepository;
import com.accenture.lkm.repository.InsurancePolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;  // Import java.sql.Date
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InsuranceDAO {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private InsurancePolicyRepository insurancePolicyRepository;

    public InsurancePolicyDTO insertPolicy(InsurancePolicyDTO insurancePolicyDTO) {
        InsurancePolicyEntity insurancePolicyEntity = new InsurancePolicyEntity();
        insurancePolicyEntity.setPolicyType(insurancePolicyDTO.getPolicyType());
        insurancePolicyEntity.setPolicyCoverageAmount(insurancePolicyDTO.getPolicyCoverageAmount());
        insurancePolicyEntity.setPolicyPremium(insurancePolicyDTO.getPolicyPremium());
        insurancePolicyEntity.setPolicyTermInYears(insurancePolicyDTO.getPolicyTermInYears());

        InsurancePolicyEntity savedEntity = insurancePolicyRepository.save(insurancePolicyEntity);
        insurancePolicyDTO.setPolicyId(savedEntity.getPolicyId());
        return insurancePolicyDTO;
    }

    public List<InsurancePolicyDTO> getAllPolicies() {
        return insurancePolicyRepository.findAll().stream()
                .map(entity -> {
                    InsurancePolicyDTO dto = new InsurancePolicyDTO();
                    dto.setPolicyId(entity.getPolicyId());
                    dto.setPolicyType(entity.getPolicyType());
                    dto.setPolicyCoverageAmount(entity.getPolicyCoverageAmount());
                    dto.setPolicyPremium(entity.getPolicyPremium());
                    dto.setPolicyTermInYears(entity.getPolicyTermInYears());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    public CustomerDTO applyPolicy(CustomerDTO customerDTO) {
        CustomerEntity customerEntity = new CustomerEntity();
        customerEntity.setCustomerName(customerDTO.getCustomerName());
        customerEntity.setCustomerDateofbirth(Date.valueOf(customerDTO.getCustomerDateofbirth()));
        customerEntity.setCustomerAddress(customerDTO.getCustomerAddress());
        customerEntity.setCustomerContact(customerDTO.getCustomerContact());
        customerEntity.setCustomerDisease(customerDTO.getCustomerDiseases());
        customerEntity.setCustomerSurgery(customerDTO.getCustomerSurgery());
        customerEntity.setPolicyId(customerDTO.getPolicyId());
        customerEntity.setPolicyStatus("Pending");

        CustomerEntity savedEntity = customerRepository.save(customerEntity);
        customerDTO.setCustomerId(savedEntity.getCustomerId());
        customerDTO.setPolicyStatus(savedEntity.getPolicyStatus());
        return customerDTO;
    }

    public List<CustomerDTO> getAllCustomerPolicies() {
        return customerRepository.findAll().stream()
                .map(entity -> {
                    CustomerDTO dto = new CustomerDTO();
                    dto.setCustomerId(entity.getCustomerId());
                    dto.setCustomerName(entity.getCustomerName());
                    dto.setCustomerDateofbirth(entity.getCustomerDateofbirth().toString());
                    dto.setCustomerAddress(entity.getCustomerAddress());
                    dto.setCustomerContact(entity.getCustomerContact());
                    dto.setCustomerDiseases(entity.getCustomerDisease());
                    dto.setCustomerSurgery(entity.getCustomerSurgery());
                    dto.setPolicyId(entity.getPolicyId());
                    dto.setPolicyStatus(entity.getPolicyStatus());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    public void approveCustomerPolicy(Integer customerId) {
        Optional<CustomerEntity> optionalCustomerEntity = customerRepository.findById(customerId);
        if (optionalCustomerEntity.isPresent()) {
            CustomerEntity customerEntity = optionalCustomerEntity.get();
            customerEntity.setPolicyStatus("Approved");
            customerRepository.save(customerEntity);
        }
    }

    public String getCustomerPolicyStatus(Integer customerId) {  // Returning policy status as String
        Optional<CustomerEntity> optionalCustomerEntity = customerRepository.findById(customerId);
        return optionalCustomerEntity.map(CustomerEntity::getPolicyStatus).orElse("Not Found");
    }

    public CustomerDTO getCustomerById(Integer customerId) {  // Returning full CustomerDTO object
        Optional<CustomerEntity> optionalCustomerEntity = customerRepository.findById(customerId);
        if (optionalCustomerEntity.isPresent()) {
            CustomerEntity entity = optionalCustomerEntity.get();
            CustomerDTO dto = new CustomerDTO();
            dto.setCustomerId(entity.getCustomerId());
            dto.setCustomerName(entity.getCustomerName());
            dto.setCustomerDateofbirth(entity.getCustomerDateofbirth().toString());
            dto.setCustomerAddress(entity.getCustomerAddress());
            dto.setCustomerContact(entity.getCustomerContact());
            dto.setCustomerDiseases(entity.getCustomerDisease());
            dto.setCustomerSurgery(entity.getCustomerSurgery());
            dto.setPolicyId(entity.getPolicyId());
            dto.setPolicyStatus(entity.getPolicyStatus());
            return dto;
        }
        return null;  // Or handle accordingly if not found
    }

    public InsurancePolicyDTO getByInsurancePolicyId(Integer policyId) {
        Optional<InsurancePolicyEntity> optionalInsurancePolicyEntity = insurancePolicyRepository.findById(policyId);
        if (optionalInsurancePolicyEntity.isPresent()) {
            InsurancePolicyEntity entity = optionalInsurancePolicyEntity.get();
            InsurancePolicyDTO dto = new InsurancePolicyDTO();
            dto.setPolicyId(entity.getPolicyId());
            dto.setPolicyType(entity.getPolicyType());
            dto.setPolicyCoverageAmount(entity.getPolicyCoverageAmount());
            dto.setPolicyPremium(entity.getPolicyPremium());
            dto.setPolicyTermInYears(entity.getPolicyTermInYears());
            return dto;
        }
        return null;  // Or handle accordingly if not found
    }
}