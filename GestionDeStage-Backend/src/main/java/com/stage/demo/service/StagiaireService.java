package com.stage.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.stage.demo.model.Stagiaire;

@Service
public interface StagiaireService {

	
	public List<Stagiaire> getAllStagiaireNotValidated();
	
	public List<Stagiaire> getAllStagiaireValidated();
	
	public Stagiaire getStagiaireById (Long stagiaireId) throws Exception;
	
	public Stagiaire updateStagiaire (Long id, Stagiaire updatedStagiaire) throws Exception;
	
	public void deleteStagiaire (Long id) throws Exception;
	
	public Stagiaire validateStagiaireAccount (Long stagiaireId) throws Exception;
	
	
}
