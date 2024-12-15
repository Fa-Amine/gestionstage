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

import io.jsonwebtoken.io.IOException;

@Service
public class StageServiceImpl implements StageService {

	@Autowired
	private StageRepository stageRepository;

	@Autowired
	private DocumentRepository documentRepository;

	@Autowired
	private UserService userService;

	private final String FOLDER_PATH = "D:\\upf4\\S7\\Project Tutoré\\Projet Backend Final\\gestionstage-BackendBranch\\GestionDeStage-Backend\\src\\main\\resources\\files\\";

	@Override
	public Stage createStage(String jwt, Stage stage, List<MultipartFile> files) throws Exception {

		User user = userService.getProfile(jwt);

		if (!user.getRole().equals("ROLE_STAGIAIRE")) {
			throw new RuntimeException("Unauthorized: Only stagiaires can create stages.");
		}

		Stagiaire stagiaire = (Stagiaire) user;
		// System.out.println(stagiaire);
		stage.setStagiaire(stagiaire);

		List<Document> savedDocuments = new ArrayList<>();

		Stage savedStage = stageRepository.save(stage);

		// Save the documents

		for (MultipartFile file : files) {

			Document document = uploadToFileSystem(file, stage);

			savedDocuments.add(document);
		}

		stage.setDocuments(savedDocuments);

		return savedStage;
	}

	public Document uploadToFileSystem(MultipartFile file, Stage stage)
			throws IOException, IllegalStateException, java.io.IOException {

		String filePath = FOLDER_PATH + file.getOriginalFilename();

		Document fileData = documentRepository.save(Document.builder().
				fileName(file.getOriginalFilename()).
			    fileType(file.getContentType()).
			    filePath(filePath).
			    stage(stage).build());

		file.transferTo(new File(filePath));

		if (fileData != null) {
			return fileData;
		}
		return null;
	}

	@Override
	public List<Stage> getAllStages() {
		
		return stageRepository.findAll();
	}

}