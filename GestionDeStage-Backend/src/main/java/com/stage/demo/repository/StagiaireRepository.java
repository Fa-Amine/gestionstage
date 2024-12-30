package com.stage.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stage.demo.model.Stagiaire;

@Repository
public interface StagiaireRepository extends JpaRepository<Stagiaire, Long> {

	List<Stagiaire> findByAccStatus(boolean accStatus);
	
	//Stagiaire findById();
	
}
