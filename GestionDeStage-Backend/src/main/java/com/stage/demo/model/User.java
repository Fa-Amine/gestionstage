package com.stage.demo.model;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", length = 4)

public class User {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nomComplete;
	
	private String email;
	
	private String motDePasse;
	
	private String role;
	
	
	
	

	public User(String nomComplete, String email, String motDePasse, String role) {
		super();
		this.nomComplete = nomComplete;
		this.email = email;
		this.motDePasse = motDePasse;
		this.role = role;
	}
	
	
	

}
