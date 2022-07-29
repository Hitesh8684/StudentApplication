package com.codelearner.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codelearner.model.StudentModel;

@Repository	
public interface StudentRepository extends JpaRepository<StudentModel, Long> {

	ArrayList<StudentModel> findStudentByIsDeleted(boolean b);

	ArrayList<StudentModel> findByfname(String name);

	@Query(value = "select * from student_master where fname LIKE '?%1' and is_deleted=false ")
	ArrayList<StudentModel> findByfnameStartsWithAndIsDeleted(String name,Boolean bool);

	

}
