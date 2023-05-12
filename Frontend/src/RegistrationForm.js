import { Component } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { saveData } from "../src/services/StudentApiService";
import { Link } from "react-router-dom";

export class RegistrationForm extends Component {
        constructor(props) {
          super(props);
          this.state = {
            rollno:'',
            name: '',
            email: '',
            phoneno:''
          };
        }
      
        handleChange=(e)=> {
          this.setState({[e.target.name]: e.target.value});  
        }
      
        handleSubmit = async (event) => {
          event.preventDefault();
          const response = await saveData(this.state);
          console.log(response.data);
          
        }
    render() {
        return (
            <>
                <Container className=" text-center" style={{marginTop:"5%"}}>
                    <Alert>Register Here</Alert>
                </Container>
                <Container className="mt-4">
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control type="text"  placeholder="Enter Roll No" name='rollno' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"  placeholder="Enter Name" name='name' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" name='email' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone No" name='phoneno' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Button  type='submit' variant="success">Register User</Button>
                        
                        <Button className="mx-2" type='reset' variant="danger">Reset Form</Button>
                    </Form>

                    <Link to="/">Back To Home</Link>
                    
                </Container>
                
            </>
        );
    }
}