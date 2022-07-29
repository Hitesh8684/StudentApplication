package com.codelearner.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "student_class")
public class StudentClass {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "sc_id")
	private Long id;
	
	@ManyToOne(targetEntity = StudentModel.class, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "stu_fk", referencedColumnName = "id")
	private StudentModel studentModel;
	
	@ManyToOne(targetEntity = ClassroomModel.class, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "cl_fk", referencedColumnName = "id")
	private ClassroomModel classRoomModel;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public StudentModel getStudentModel() {
		return studentModel;
	}

	public void setStudentModel(StudentModel studentModel) {
		this.studentModel = studentModel;
	}

	public ClassroomModel getClassRoomModel() {
		return classRoomModel;
	}

	public void setClassRoomModel(ClassroomModel classRoomModel) {
		this.classRoomModel = classRoomModel;
	}
	
	
	
	

}
