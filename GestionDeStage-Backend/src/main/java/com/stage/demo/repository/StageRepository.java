package com.stage.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stage.demo.model.Stage;
import java.util.List;


@Repository
public interface StageRepository extends JpaRepository<Stage, Long>{
	
	public List<Stage> findByStatus(boolean status);

}
