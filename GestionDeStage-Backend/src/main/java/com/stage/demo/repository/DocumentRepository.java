package com.stage.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stage.demo.model.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

	
}
