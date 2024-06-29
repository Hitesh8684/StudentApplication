import React, { Component } from "react";
import { Button, Input, InputGroup, Spinner } from "reactstrap";
import loading_gif from "./img/loading_gif.gif";
import NavBar from "./Navbar";

class Search extends Component {
  
  state = {
    searchResult: [],
    isLoading: true,
    searchkey: "",
  };

  handleSearch = async (event) => {
    console.log(event.target.value);
    const url = "search/" + event.target.value;

    if (event.target.value) {
      const response = await fetch(url).catch((error) => {
        throw error;
      });
      const body = await response.json();
      console.log("data=>" + JSON.stringify(body));
      this.setState({ searchResult: body, isLoading: false });
    }

    event.preventDefault();
  };

  handleDelete = async (e) => {
    const url = "/delete/" + e;
    console.log("handelDelete=>" + url);
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    this.handleSearch();
  };
  render() {
    const { isLoading, searchResult } = this.state;

    return (
      <div>
        <NavBar />
        <div>
          <InputGroup>
            <Input placeholder="Search Students" onChange={this.handleSearch} />
            <Button color="primary">Search</Button>
          </InputGroup>
        </div>
        {isLoading ? (
          <div>
             <div className="back">
            <div>
              <img className="img" src={loading_gif}></img>
            </div>
          </div>
          </div>
        ) : (
          <div>
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
                {searchResult.map((student) => (
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
                      <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
