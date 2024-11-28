package com.stage.demo.entities;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data

@Entity
@DiscriminatorValue("ENCA")
public class EncadrantPedagogique extends User {
	
	
	

}
