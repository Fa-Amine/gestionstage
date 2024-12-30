package com.stage.demo.controller;


import com.stage.demo.model.Soutenance;
import com.stage.demo.model.Stage;
import com.stage.demo.model.User;
import com.stage.demo.repository.SoutenanceRepository;
import com.stage.demo.repository.StageRepository;
import com.stage.demo.repository.UserRepository;
import com.stage.demo.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/soutenance")
public class SoutenanceController {

    private final SoutenanceRepository soutenanceRepository;
    private final UserRepository userRepository;

    private final StageRepository stageRepository;

    private final EmailService emailService;

    @Autowired
    public SoutenanceController(SoutenanceRepository soutenanceRepository, UserRepository userRepository, StageRepository stageRepository, EmailService emailService) {
        this.soutenanceRepository = soutenanceRepository;
        this.userRepository = userRepository;
        this.stageRepository = stageRepository;
        this.emailService = emailService;
    }

    @PostMapping("/ajouterSoutenance")
    public void ajouterSoutenance(@RequestBody Soutenance soutenance) {
        // Gérer la liste des membres du jury
        List<User> managedJury = new ArrayList<>();
        for (User juryMember : soutenance.getJury()) {
            // Récupérer l'utilisateur existant depuis la base de données
            User managedUser = userRepository.findById(juryMember.getId())
                    .orElseThrow(() -> new RuntimeException("User not found: " + juryMember.getId()));
            managedJury.add(managedUser);
        }
        soutenance.setJury(managedJury);

        // Gérer l'objet Stage
        if (soutenance.getStage() != null && soutenance.getStage().getId() != null) {
            Stage managedStage = stageRepository.findById(soutenance.getStage().getId())
                    .orElseThrow(() -> new RuntimeException("Stage not found: " + soutenance.getStage().getId()));
            soutenance.setStage(managedStage);
        }

        // Sauvegarder la soutenance
        soutenanceRepository.save(soutenance);
        String to = soutenance.getStage().getStagiaire().getEmail(); // L'email du destinataire (par exemple un membre du jury)
        String subject = "Nouvelle Soutenance Planifiée";

        StringBuilder body = new StringBuilder();
        body.append("Une nouvelle soutenance a été ajoutée :\n\n")
                .append("Date : ").append(soutenance.getDate()).append("\n")
                .append("Salle : ").append(soutenance.getSalle()).append("\n")
                .append("\nJury :\n");

        for (User member : soutenance.getJury()) {
            body.append("- ").append(member.getNomComplete()).append("\n"); // Assurez-vous que 'getEmail()' est la méthode pour récupérer l'email du membre
        }
        emailService.sendEmail(to, subject, body.toString());   
    }

}
