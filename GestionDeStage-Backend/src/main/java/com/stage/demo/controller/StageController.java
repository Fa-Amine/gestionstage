package com.stage.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

@RestController
@RequestMapping("/api/stage")
public class StageController {

	@Autowired
	private StageService stageService;

	@PostMapping("/createStage")
	public ResponseEntity<Stage> createStage(@RequestHeader("Authorization") String jwt, @RequestBody Stage stage) {
		try {

			Stage savedStage = stageService.createStage(jwt, stage);

			return new ResponseEntity<>(savedStage, HttpStatus.CREATED);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PostMapping("/uploadFile")
	public ResponseEntity<Document> uploadImageToFIleSystem(@RequestHeader("Authorization") String jwt, @RequestParam("file") MultipartFile file) throws IOException, IllegalStateException, java.io.IOException {
		
		Document uploadImage = stageService.uploadImageToFileSystem(file);
		
		return new ResponseEntity<>(uploadImage,HttpStatus.OK);
	}

}