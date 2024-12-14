package com.stage.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.stage.demo.model.EncadrantPedagogique;
import com.stage.demo.model.Stagiaire;
import com.stage.demo.repository.UserRepository;

@SpringBootApplication
public class GestionDeStageBackendApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(GestionDeStageBackendApplication.class, args);
		System.out.println("OK");

		
	}

	@Override
	public void run(String... args) throws Exception {

		Stagiaire stagiaire = new Stagiaire();
		EncadrantPedagogique encadrantPedagogique = new EncadrantPedagogique();

		encadrantPedagogique.setNomComplete("ma3ti boujem3a");
		encadrantPedagogique.setEmail("ma3ti@gmail.com");
		encadrantPedagogique.setMotDePasse("1234");
		encadrantPedagogique.setRole("ROLE_ENCADRANT");
		encadrantPedagogique.setDepatement("GINFO");

		stagiaire.setFiliere("INFO");
		stagiaire.setN_Etudiant("C155121");
		stagiaire.setNumeroTelephone("021512121");

	 //	userRepository.save(encadrantPedagogique);
	}

}
