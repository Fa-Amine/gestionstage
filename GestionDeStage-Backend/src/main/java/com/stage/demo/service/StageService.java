package com.stage.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.stage.demo.model.Document;
import com.stage.demo.model.Stage;

import io.jsonwebtoken.io.IOException;

@Service
public interface StageService {

	public Stage createStage(String jwt, Stage stage, MultipartFile file) throws Exception;

	public  Document uploadToFileSystem(MultipartFile file) throws IOException, IllegalStateException, java.io.IOException ;
		
}