package com.stage.demo.entities;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@DiscriminatorValue("STAG")
public class Stagiaire extends User {

	
	public Stagiaire() {

	}

	private String filiere;
	
	private String n_Etudiant;
	
	private String numeroTelephone;

	public Stagiaire(String filiere, String n_Etudiant, String numeroTelephone) {
		super();
		this.filiere = filiere;
		this.n_Etudiant = n_Etudiant;
		this.numeroTelephone = numeroTelephone;
	}

	public String getFiliere() {
		return filiere;
	}

	public void setFiliere(String filiere) {
		this.filiere = filiere;
	}

	public String getN_Etudiant() {
		return n_Etudiant;
	}

	public void setN_Etudiant(String n_Etudiant) {
		this.n_Etudiant = n_Etudiant;
	}

	public String getNumeroTelephone() {
		return numeroTelephone;
	}

	public void setNumeroTelephone(String numeroTelephone) {
		this.numeroTelephone = numeroTelephone;
	}
	
	
	
	
 
}
