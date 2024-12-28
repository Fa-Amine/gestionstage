package com.stage.demo.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
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


@Service
public class StageServiceImpl implements StageService {

	@Autowired
	private StageRepository stageRepository;

	@Autowired
	private DocumentRepository documentRepository;

	@Autowired
	private UserService userService;

	//private final String FOLDER_PATH = "D:\\upf4\\S7\\Project Tutoré\\Projet Backend Final\\gestionstage-BackendBranch\\GestionDeStage-Backend\\src\\main\\resources\\files\\";

	private final String uploadDir = System.getProperty("user.dir") + "/uploads";

	@Override
	public String createStage(String jwt, Stage stage, MultipartFile[] files) throws Exception {

		User user = userService.getProfile(jwt);

		if (!user.getRole().equals("ROLE_STAGIAIRE")) {
			throw new RuntimeException("Unauthorized: Only stagiaires can create stages.");
		}

		Stagiaire stagiaire = (Stagiaire) user;
		// System.out.println(stagiaire);

		if (stagiaire.isAccStatus() != true) {
			throw new RuntimeException("Unauthorized: Only validated stagiaires accounts can create stages.");
		}

		stage.setStagiaire(stagiaire);
	//	System.out.println(stage);

		Path uploadPath = Paths.get(uploadDir);

		if (!Files.exists(uploadPath)) {
			Files.createDirectories(uploadPath);
		}

		for (MultipartFile file : files) {
			String originalFileName = file.getOriginalFilename();

			if (originalFileName != null && !originalFileName.isEmpty()) {
				String fileExtension = "";
				int dotIndex = originalFileName.lastIndexOf(".");
				if (dotIndex != -1) {
					fileExtension = originalFileName.substring(dotIndex);
				}
				String uniqueFileName = originalFileName.replace(fileExtension, "") + "_" + Instant.now().toEpochMilli()
						+ fileExtension;
				Path filePath = uploadPath.resolve(uniqueFileName);
				file.transferTo(filePath.toFile());
				Document document = new Document(uniqueFileName);
				document.setStage(stage);
				stage.getDocuments().add(document);
			}
		}
		
		 stageRepository.save(stage);
		 
		 String msg = "Files uploaded successfully to " + uploadPath.toAbsolutePath();

		return msg;
	}

//	public Document uploadToFileSystem(MultipartFile file, Stage stage)
//			throws IOException, IllegalStateException, java.io.IOException {
//
//		String filePath = FOLDER_PATH + file.getOriginalFilename();
//
//		Document fileData = documentRepository.save(Document.builder().fileName(file.getOriginalFilename())
//				.fileType(file.getContentType()).filePath(filePath).stage(stage).build());
//
//		file.transferTo(new File(filePath));
//
//		if (fileData != null) {
//			return fileData;
//		}
//		return null;
//	}

	@Override
	public List<Stage> getAllStages() {

		return stageRepository.findAll();
	}
	

	@Override
	public List<Stage> getAllStagesNotValidated() {
		
		return stageRepository.findByStatus(false);
	}

	@Override
	public List<Stage> getAllStagesValidated() {
		
		return stageRepository.findByStatus(true);
	}

	@Override
	public Stage getStageById(Long stageId) throws Exception {
		
		return stageRepository.findById(stageId).orElseThrow(() -> new Exception("Stage not found with id : "+stageId));
	}

	@Override
	public void deleteStage(Long id, String jwt) throws Exception {
		
		User user = userService.getProfile(jwt);

		if (!user.getRole().equals("ROLE_ADMIN")) {
			throw new RuntimeException("Unauthorized: Only ADMIN can delete stages.");
		}
		
		Stage stage = getStageById(id);
	
		// Delete documents manually
		/*
		 * if (stage.getDocuments() != null && !stage.getDocuments().isEmpty()) { for
		 * (Document document : stage.getDocuments()) {
		 * documentRepository.delete(document); } }
		 */
		
		stageRepository.delete(stage);
		
	}

	@Override
	public Stage validateStage(Long stageId, String jwt) throws Exception {
		
		User user = userService.getProfile(jwt);

		if (!user.getRole().equals("ROLE_ADMIN")) {
			throw new RuntimeException("Unauthorized: Only ADMIN can validate stages.");
		}
	
		Stage stage = getStageById(stageId);
		
		stage.setStatus(true);
		
		return stageRepository.save(stage);
	}
	
	

}