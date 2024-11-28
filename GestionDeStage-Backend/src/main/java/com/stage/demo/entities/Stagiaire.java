package com.stage.demo.entities;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@DiscriminatorValue("STAG")
public class Stagiaire extends User {

	
	private String filiere;
	
	private String n_Etudiant;
	
	private String numeroTelephone;
	
	
	
 
}
