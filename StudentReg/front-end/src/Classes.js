import React, { Component } from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
  CardImgOverlay,
  Row,
  Col,
} from "reactstrap";
import cardimg from "./img/cardimg.jpg";

class Classes extends Component {
  state = {
    isLoading: true,
    classList: [],
  };

  async componentDidMount() {
    const response = await fetch("/getClasses");
    const body = await response.json();
    this.setState({ isLoading: false, classList: body });

    console.log(body);
  }
  render() {
    const { isLoading, classList } = this.state;
    return (
      <div>
        <Row>
       
        
        
          {classList.map((classes) => (
          
          <Col sm="4">
              
                <Card body>
                  <CardTitle tag="h5">{classes.name}</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              
                </Col>
          ))}
          
        
        
        </Row>
      </div>
    );
  }
}

export default Classes;
