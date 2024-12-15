package com.stage.demo.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.stage.demo.model.Document;
import com.stage.demo.model.Stage;
import com.stage.demo.model.Stagiaire;
import com.stage.demo.model.User;
import com.stage.demo.repository.DocumentRepository;
import com.stage.demo.repository.StageRepository;
import com.stage.demo.repository.StagiaireRepository;

import io.jsonwebtoken.io.IOException;

@Service
public class StageServiceImpl implements StageService {

	@Autowired
	private StageRepository stageRepository;

	@Autowired
	private DocumentRepository documentRepository;

	@Autowired
	private StagiaireRepository stagiaireRepository;

	@Autowired
	private UserService userService;

	private final String FOLDER_PATH="D:\\upf4\\S7\\Project Tutoré\\Projet Backend Final\\gestionstage-BackendBranch\\GestionDeStage-Backend\\src\\main\\resources\\files\\";
	
	@Override
	public Stage createStage(String jwt, Stage stage, MultipartFile file) throws Exception {

		User user = userService.getProfile(jwt);

		if (!user.getRole().equals("ROLE_STAGIAIRE")) {
			throw new RuntimeException("Unauthorized: Only stagiaires can create stages.");
		}
		
		
		  
	    Stagiaire stagiaire = (Stagiaire) user;
	//    System.out.println(stagiaire);
	    stage.setStagiaire(stagiaire);
	    
	    Document document = uploadToFileSystem(file);
	    
	    List<Document> savedDocuments = new ArrayList<>();
	    savedDocuments.add(document);
	    
	    stage.setDocuments(savedDocuments);
	    		
	    		
	    Stage savedStage = stageRepository.save(stage);
	    
		
//		// Save the documents
//		List<Document> savedDocuments = new ArrayList<>();
//		
//		for (MultipartFile file : documents) {
//			String uploadDir = "uploads/documents/";
//			File uploadFile = new File(uploadDir + file.getOriginalFilename());
//
//			// Ensure the directory exists
//			if (!uploadFile.getParentFile().exists()) {
//				uploadFile.getParentFile().mkdirs();
//			}
//
//			// Save the file to the server
//			file.transferTo(uploadFile);
//
//			// Create a Document entity
//			Document document = new Document();
//			document.setFileName(file.getOriginalFilename());
//			document.setFilePath(uploadFile.getAbsolutePath());
//			document.setStage(stage);
//
//			// Save the Document
//			savedDocuments.add(documentRepository.save(document));
//		}
//
//		// Associate the documents with the stage
//		stage.setDocuments(savedDocuments);

		return savedStage;
	}
	
	 public Document uploadToFileSystem(MultipartFile file) throws IOException, IllegalStateException, java.io.IOException {
		 
	        String filePath=FOLDER_PATH+file.getOriginalFilename();

	        Document fileData=documentRepository.save(Document.builder()
	                .fileName(file.getOriginalFilename())
	                .fileType(file.getContentType())
	                .filePath(filePath).build());

	        file.transferTo(new File(filePath));

	        if (fileData != null) {
	            return fileData;
	        }
	        return null;
	    }


}