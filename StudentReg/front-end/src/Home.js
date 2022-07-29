import React, { Component } from "react";
import NavBar from "./Navbar";
import loading_gif from "./img/loading_gif.gif";

class Home extends Component {
  state = {
    isLoading: true,
    studentList: [],
    searchTerm: "",
    searchStatus: false,
    searchResulSet: [],
  };
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const response = await fetch("/home");
    const body = await response.json();

    this.setState({ studentList: body, isLoading: false });
  }

  render() {
    const { studentList, isLoading} = this.state;
   
    if (isLoading)
      return (
        <div>
          <NavBar />
          <div className="back">
            <div>
              <img className="img" src={loading_gif}></img>
            </div>
          </div>
        </div>
      );
    return (
      <div>
        <NavBar />

       
        <table class="table table-success table-striped table-hover">
          <thead>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Action</th>
          </thead>

          <tbody>
            {studentList.map((student) => (
              <tr>
                <td>{student.fname}</td>
                <td>{student.mname}</td>
                <td>{student.lname}</td>
                <td>{student.dob}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>{student.phone}</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
