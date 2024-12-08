package com.accenture.lkm.repository;

import com.accenture.lkm.entity.InsurancePolicyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsurancePolicyRepository extends JpaRepository<InsurancePolicyEntity, Integer> {
}