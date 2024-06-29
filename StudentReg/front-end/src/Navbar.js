import React, { Component } from "react";
import {useNavigate} from 'react-router-dom'
import Classes from "./Classes";
import "./css/sb-admin-2.css";
import Home from "./Home";

class NavBar extends Component {
  state = {
    search:'',
    onShow: false,
    color : 'dark',
    backgroundColor : 'dark',
    mode : 'dark'
  };

  componentDidMount() {
    this.handleSearch=this.handleSearch.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSearch = (event)=>{
    if(this.state.color === 'dark'){
      this.setState({color:'white',backgroundColor:'dark',mode:'light'});
    }else{
      this.setState({color:'dark',backgroundColor:'white',mode:'dark'});
    }
   
  }

  handleSubmit =(e)=>{
    e.preventDefault();
    this.setState({onShow:true});

    
  }

  render() {
    const {onShow,search,color,backgroundColor}=this.state;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.state.color} bg-${this.state.backgroundColor}`}>
          <div class="container-fluid">
           
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"> </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/addStudent">
                    New Student
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/class">
                    Class
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/search">
                    Find Students
                  </a>
                </li>
              </ul>
              <form class="d-flex">
               
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={this.handleSearch}/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable {this.state.mode} Mode</label>
              </div>
               
                
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
