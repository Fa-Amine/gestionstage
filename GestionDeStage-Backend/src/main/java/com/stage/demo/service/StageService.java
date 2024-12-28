package com.stage.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.stage.demo.model.Document;
import com.stage.demo.model.Stage;
import com.stage.demo.model.Stagiaire;

import io.jsonwebtoken.io.IOException;

@Service
public interface StageService {

	public String createStage(String jwt, Stage stage, MultipartFile[] files) throws Exception;

	//public  Document uploadToFileSystem(MultipartFile file, Stage stage) throws IOException, IllegalStateException, java.io.IOException;
	
	public List<Stage> getAllStages();
	
    public List<Stage> getAllStagesNotValidated();
	
	public List<Stage> getAllStagesValidated();
	
	public Stage getStageById (Long stageId) throws Exception;
	
	public void deleteStage (Long id, String jwt) throws Exception;
	
	public Stage validateStage (Long stageId, String jwt) throws Exception;
	
	 
		
}