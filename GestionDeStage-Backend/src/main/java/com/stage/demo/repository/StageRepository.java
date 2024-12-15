package com.stage.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stage.demo.model.Stage;

@Repository
public interface StageRepository extends JpaRepository<Stage, Long>{

}
