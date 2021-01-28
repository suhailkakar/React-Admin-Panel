import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Add Offers</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Offers Options </h5>
                                <hr/>
                                <Row>
                                    <Col md={6} className="d-flex">
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> Name of the Offer</Form.Label>
                                                <Form.Control style={{paddingRight:"490px"}}type="text" placeholder="Enter the Offer Name" />
                                                </Form.Group>
                                                </Form>
                                                </Col>
                                                <Col md={6}>
                                            
                                            <Form.Group style={{marginLeft:"50px"}}>
                                            <Form.Label>Choose Image </Form.Label><br />
                                            <input type="file" /> 

                                            </Form.Group>

                                        
                                    </Col>

                                                <Col md={12}>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea"placeholder="Enter detailed information regarding the coupon" rows="3" />
                                            </Form.Group>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                    
                                        <br />
                                        <br />
                                        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
                                          <button  className="label theme-bg2 text-white f-12" style={{ color: "#fff",display: "flex", justifyContent: "center", alignItems: "center", padding: "6px 20px 6px 20px",border: "none", borderRadius: "5px", fontSize: "30px",fontWeight: "400",boxShadow: "0 1px 10px rgba(0,0,0,0.3)",cursor: "pointer" }} > Add Offer </button>
      </div>


                                    </Col>                                          

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsElements;
