package com.stage.demo.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Soutenance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    private String salle;

    private boolean valide;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "soutenance_jury",
            joinColumns = @JoinColumn(name = "soutenance_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> jury = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    private Stage stage;

    public Soutenance() {
    }

    public Soutenance(Long id, Date date, String salle, boolean valide, List<User> jury, Stage stage) {
        this.id = id;
        this.date = date;
        this.salle = salle;
        this.valide = valide;
        this.jury = jury;
        this.stage = stage;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSalle() {
        return salle;
    }

    public void setSalle(String salle) {
        this.salle = salle;
    }

    public boolean getValide() {
        return valide;
    }

    public void setValide(boolean valide) {
        this.valide = valide;
    }

    public List<User> getJury() {
        return jury;
    }

    public void setJury(List<User> jury) {
        this.jury = jury;
    }

    public Stage getStage() {
        return stage;
    }

    public void setStage(Stage stage) {
        this.stage = stage;
    }

    @Override
    public String toString() {
        return "Soutenance{" +
                "id=" + id +
                ", date=" + date +
                ", salle='" + salle + '\'' +
                ", valide=" + valide +
                ", jury=" + jury +
                ", stage=" + stage +
                '}';
    }
}
