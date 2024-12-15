package com.stage.demo.model;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
//@DiscriminatorValue("ENCA")
public class EncadrantPedagogique extends User {
	
	private String depatement;
	

}
