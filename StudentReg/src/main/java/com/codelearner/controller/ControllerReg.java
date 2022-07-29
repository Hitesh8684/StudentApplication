package com.codelearner.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.codelearner.model.ClassroomModel;
import com.codelearner.model.StudentModel;
import com.codelearner.repository.ClassRepository;
import com.codelearner.repository.StudentRepository;

@Controller
public class ControllerReg {
	
	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	ClassRepository classRepository;

	@GetMapping("/home")
	public ResponseEntity<List<StudentModel>> getHome(Model model) {
		
		ArrayList<StudentModel> studentList = new ArrayList<StudentModel>();
		studentRepository.findStudentByIsDeleted(false).forEach(studentList::add);
		HttpHeaders headers= new HttpHeaders();
		headers.add("responded", "ControllerReg");
		
		
		return ResponseEntity.accepted().headers(headers).body(studentList);
	}
	
	@GetMapping("/getClasses")
	public ResponseEntity<List<ClassroomModel>>getClasses() {
		ArrayList<ClassroomModel> classRoom = new ArrayList<ClassroomModel>();
		classRepository.findAll().forEach(classRoom :: add);
		HttpHeaders headers=new HttpHeaders();
		headers.add("responded","ControllerReg");
		
		return ResponseEntity.accepted().headers(headers).body(classRoom);
		
		
		
	}
	
	@GetMapping("/search/{name}")
	public ResponseEntity<List<StudentModel>> getSearchResults(@PathVariable String name){
		ArrayList<StudentModel> searchResults = new ArrayList<StudentModel>();
		studentRepository.findByfnameStartsWithAndIsDeleted(name,false).forEach(searchResults :: add);
		HttpHeaders headers = new HttpHeaders();
		headers.add("responded", "ControllerReg");
		System.out.println("search Results"+searchResults.size());
		
		return ResponseEntity.accepted().headers(headers).body(searchResults);
		
	}
	
	
	
	@GetMapping("/register")
	public String stuRegister() {
			
		return "register";
	}
	@PostMapping("/newStudent")
	public String newStudent(@RequestBody StudentModel studentModel) {
		System.out.println("Student Age"+studentModel.getAge());
		/*String name,gender,email;
		int stream,age;
		name=req.getParameter("stu_name");
		gender=req.getParameter("gender");
		email=req.getParameter("email");
		String id=req.getParameter("idtest");
		stream=Integer.parseInt(req.getParameter("stream"));
		age=Integer.parseInt(req.getParameter("age"));
		if(id!="" && id!=null) {
			System.out.println("IM' in update");
			StudentModel student = studentRepository.getOne(Long.parseLong(id));
			student.setName(name);
			student.setAge(age);
			student.setStream(stream);
			student.setGender(gender);
			student.setEmail(email);
			
			studentRepository.save(student);
			
		}else {
		
			System.out.println("IM' in new");
		StudentModel student=new StudentModel();
		
		student.setName(name);
		student.setAge(age);
		student.setStream(stream);
		student.setGender(gender);
		student.setEmail(email);
		
		studentRepository.save(student);
		}*/
		
		
		studentRepository.save(studentModel);
		
		
		
		
		
		return "redirect:/home";
	}
	
	/*@GetMapping("/update/{id}")
	public String updateStudent(@PathVariable Long id,Model model) {
		StudentModel studentModel = studentRepository.getOne(id);
		model.addAttribute("student",studentModel);
		
		return "register";
		
	}*/
	
	@GetMapping("/delete/{id}")
	public ResponseEntity deleteStudent(@PathVariable Long id) {
		StudentModel student = studentRepository.getOne(id);
		System.out.println(student);
		student.setDeleted(true);
		studentRepository.save(student);
		return ResponseEntity.ok().build();
		
	}
}
