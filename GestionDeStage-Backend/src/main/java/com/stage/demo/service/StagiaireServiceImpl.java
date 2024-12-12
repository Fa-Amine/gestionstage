package com.stage.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stage.demo.model.Stagiaire;
import com.stage.demo.repository.StagiaireRepository;

@Service
public class StagiaireServiceImpl implements StagiaireService {

	
	@Autowired
	private StagiaireRepository stagiaireRepository;

	
	@Override
	public List<Stagiaire> getAllStagiaireNotValidated() {
		
		return stagiaireRepository.findByAccStatus(false);
	}
	

	@Override
	public List<Stagiaire> getAllStagiaireValidated() {

        return stagiaireRepository.findByAccStatus(true);
	}
	

	
	@Override
	public Stagiaire getStagiaireById(Long stagiaireId) throws Exception {
		
		return stagiaireRepository.findById(stagiaireId).orElseThrow(() -> new Exception("Stagiaire not found with id : "+stagiaireId));
	}

	
	
	@Override
	public Stagiaire updateStagiaire(Long StagiaireId, Stagiaire updatedStagiaire) throws Exception {
		
		Stagiaire existingStagiaire = getStagiaireById(StagiaireId);
		
		if(updatedStagiaire.getFiliere() != null) {
			existingStagiaire.setFiliere(updatedStagiaire.getFiliere());
		}
		if(updatedStagiaire.getNumeroTelephone() != null) {
			existingStagiaire.setNumeroTelephone(updatedStagiaire.getNumeroTelephone());
		}
		
		
		return stagiaireRepository.save(existingStagiaire);
	}

	@Override
	public void deleteStagiaire(Long id) throws Exception {

		Stagiaire stagiaire = getStagiaireById(id);
		
		stagiaireRepository.delete(stagiaire);
	}

	@Override
	public Stagiaire validateStagiaireAccount(Long stagiaireId) throws Exception {
		
		Stagiaire stagiaire = getStagiaireById(stagiaireId);
		
		stagiaire.setAccStatus(true);
		
		return stagiaireRepository.save(stagiaire);
	}
	
	
	
	
}
