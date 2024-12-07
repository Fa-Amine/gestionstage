package com.stage.demo.entities;

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

	public User() {

	}
	
	

	public User(Long id, String nomComplete, String email, String motDePasse, String role) {
		super();
		this.id = id;
		this.nomComplete = nomComplete;
		this.email = email;
		this.motDePasse = motDePasse;
		this.role = role;
	}



	public User(String nomComplete, String email, String motDePasse, String role) {
		super();
		this.nomComplete = nomComplete;
		this.email = email;
		this.motDePasse = motDePasse;
		this.role = role;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getNomComplete() {
		return nomComplete;
	}



	public void setNomComplete(String nomComplete) {
		this.nomComplete = nomComplete;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getMotDePasse() {
		return motDePasse;
	}



	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}
	
	

}
