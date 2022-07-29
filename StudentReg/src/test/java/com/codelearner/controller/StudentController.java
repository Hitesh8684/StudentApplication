package com.codelearner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentController {
	
	
	@GetMapping("/home")
	public String getHome() {
		
		return "index";
	}

}
