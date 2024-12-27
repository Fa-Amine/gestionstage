package com.stage.demo.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.stage.demo.model.Document;
import com.stage.demo.model.Stage;
import com.stage.demo.service.StageService;

import io.jsonwebtoken.io.IOException;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/stage")
public class StageController {

	@Autowired
	private StageService stageService;

	@PostMapping("/createStage")
	public ResponseEntity<String> createStage(@RequestHeader("Authorization") String jwt
			, @RequestParam("type") String type
			, @RequestParam("status") Boolean status
			, @RequestParam("nomEntreprise") String nomEntreprise
			, @RequestParam("domainEntreprise") String domainEntreprise
			, @RequestParam("dateDebut") Date dateDebut
			, @RequestParam("dateFin")  Date dateFin
			, @RequestParam("files") MultipartFile[] files ) throws Exception {
		
		try {
			
			Stage stage = new Stage(type, status, nomEntreprise, domainEntreprise, dateDebut, dateFin);

			String savedStage = stageService.createStage(jwt, stage, files);

			return ResponseEntity.ok(savedStage);
		} catch (IOException e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
		}

	}
	
	
//	@PostMapping("/uploadFile") // testing api to upload file alone
//	public ResponseEntity<Document> uploadImageToFIleSystem(@RequestHeader("Authorization") String jwt, 
//			@RequestParam("file") MultipartFile file) throws IOException, IllegalStateException, java.io.IOException {
//		
//		Stage stage = new Stage(); // empty stage just for testing
//		
//		Document uploadImage = stageService.uploadToFileSystem(file, stage);
//		
//		return new ResponseEntity<>(uploadImage,HttpStatus.OK);
//	}
	
	@GetMapping("/getAllStages")
	public ResponseEntity<List<Stage>> getMethodName(@RequestHeader("Authorization") String jwt) {
		
		List<Stage> stages = stageService.getAllStages();
		
		return new ResponseEntity<List<Stage>>(stages, HttpStatus.OK);
	}
	

}