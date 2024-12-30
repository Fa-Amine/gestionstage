package com.stage.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestEmailController {

    @Autowired
    private JavaMailSender mailSender;

    @GetMapping("/test-email")
    public String sendTestEmail() {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("aouam-you@upf.ac.ma");
            message.setSubject("Test Email");
            message.setText("This is a test email from Spring Boot.");
            message.setFrom("aouam@upf.ac.ma");
            mailSender.send(message);
            return "Email sent successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to send email: " + e.getMessage();
        }
    }
}

