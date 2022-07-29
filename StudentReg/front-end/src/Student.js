import React, { Component } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import NavBar from "./Navbar";

class Student extends Component {
  state = {
    isLoading: true,
    fname: "",
    mname: "",
    lname: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
    dob: new Date(),
  };

  handleDateChnage = (date) => {
    console.log(date.getDate());

    this.setState({ dob: date });
  };

    handleSubmit = (event) => {
      event.preventDefault();
      let student = {
        fname: this.state.fname,
        mname: this.state.mname,
        lname: this.state.lname,
        gender: this.state.gender,
        age: this.state.age,
        email: this.state.email,
        phone: this.state.phone,
        dob: this.state.dob,
      };
      console.log("student=>" + JSON.stringify(student));

      fetch('/newStudent', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });
      event.preventDefault();
      event.target.reset();
    };
  

  handleCancel = (event) => {
    this.setState({});
  };

  handleFname = (event) => {
    this.setState({ fname: event.target.value });
  };

  handleMname = (event) => {
    this.setState({ mname: event.target.value });
  };

  handleLname = (event) => {
    this.setState({ lname: event.target.value });
  };

  handleGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleAge = (event) => {
    this.setState({ age: event.target.value });
  };

  handlePhone = (event) => {
    this.setState({ phone: event.target.value });
    
  };

  componentDidMount() {
    this.handleDateChnage = this.handleDateChnage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFname = this.handleFname.bind(this);
    this.handleMname = this.handleMname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handlePhone = this.handlePhone.bind(this);

    this.setState({ dob: null });
  }

  render() {
    let conStyle = {
      "padding-left": "10%",
      "padding-right": "10%",
      "padding-top": "5%",
    };

    return (
      <div>
        <NavBar />
        <div class="container" align="center" style={conStyle}>
          <h3>Add Student</h3>
          <form onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  onChange={this.handleFname}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Middle name"
                  aria-label="Middle name"
                  onChange={this.handleMname}
                />
              </div>

              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  onChange={this.handleLname}
                />
              </div>
            </div>
            <div>
              <input
                type="radio"
                name="flexRadioDefault"
                id="male"
                value="male"
                onChange={this.handleGender}
              />
              Male
              <input
                type="radio"
                name="flexRadioDefault"
                id="male"
                value="female"
                onChange={this.handleGender}
              />
              Female
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={this.handleEmail}
              />
            </div>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Age"
                  aria-label="Age"
                  onChange={this.handleAge}
                />
              </div>

              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                  aria-label="Phone"
                  onChange={this.handlePhone}
                />
              </div>
              <div class="col">
                <Datepicker
                  class="form-control"
                  placeholderText="Date of Birth"
                  selected={this.state.dob}
                  onChange={this.handleDateChnage}
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div>
                  <button class="btn btn-m btn-primary" type="submit">
                    SUBMIT
                  </button>
                </div>
              </div>
              <div class="col">
                <div>
                  <button
                    class="btn btn-m btn-danger"
                    onClick={this.handleCancel}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Student;
