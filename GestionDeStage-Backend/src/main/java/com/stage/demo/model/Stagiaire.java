package com.stage.demo.model;


import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor


@Entity
//@DiscriminatorValue("STAG")
public class Stagiaire extends User {

	
	private String filiere;
	
	private String n_Etudiant;
	
	private String numeroTelephone;
	
	private boolean accStatus;
	
	@OneToMany(mappedBy = "stagiaire")
	private List<Stage> stages;
	
	
	
 
}
