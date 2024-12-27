package com.stage.demo.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString


@Entity
public class Stage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String type;
	
	private boolean status;
	
	private String nomEntreprise;
	
	private String domainEntreprise;
	
	@Temporal(TemporalType.DATE)
	private Date dateDebut;
	
	@Temporal(TemporalType.DATE)
	private Date dateFin;
	
	@ManyToOne
    @JsonIgnore
	private Stagiaire stagiaire;
	
	@OneToMany(mappedBy = "stage", cascade = CascadeType.PERSIST)
	private List<Document> documents = new ArrayList<Document>();
	
	

	public Stage(String type, boolean status, String nomEntreprise, String domainEntreprise, Date dateDebut,
			Date dateFin, Stagiaire stagiaire, List<Document> documents) {
		super();
		this.type = type;
		this.status = status;
		this.nomEntreprise = nomEntreprise;
		this.domainEntreprise = domainEntreprise;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.stagiaire = stagiaire;
		this.documents = documents;
	}	
	
	public Stage(String type, boolean status, String nomEntreprise, String domainEntreprise, Date dateDebut, Date dateFin) {
		this.type = type;
		this.status = status;
		this.nomEntreprise = nomEntreprise;
		this.domainEntreprise = domainEntreprise;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
	}
	
	

}
