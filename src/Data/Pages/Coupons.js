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
                                <Card.Title as="h5">Add Coupon</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Coupon Options</h5>
                                <hr/>
                                <Row>
                                    <Col md={6} className="d-flex">
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> Coupon Name</Form.Label>
                                                <Form.Control style={{paddingRight:"490px"}}type="text" placeholder="Enter the Coupon Name" />
                                                </Form.Group>
                                                </Form>
                                                </Col>
                                                <Col md={6}>
                                    <Form.Group controlId="formBasicEmail">

                                    <Form.Label> Coupon Code</Form.Label>
                                                <Form.Control type="text" placeholder="Enter the Coupon Code" />
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
                                    <Form className="d-flex"> 
                                    <Form.Group>
                                    <Form.Label>Start Date</Form.Label>

                                    <Form.Control  type="date" placeholder="DD-MM-YYYY"  />

                                    </Form.Group>

                                    <Form.Group style={{marginLeft:"50px"}}>
                                    <Form.Label>End Date</Form.Label>

                                    <Form.Control  type="date" placeholder="DD-MM-YYYY"  />

                                    </Form.Group>
                                    <Form.Group style={{marginLeft:"50px"}}>
                                            <Form.Label>Discount</Form.Label>
                                            <Form.Control as="select">
                                            <option>Select Discount</option>
                                                <option>10%</option>
                                                <option>30%</option>
                                                <option>50%</option>
                                                <option>70%</option>
                                                <option>100%</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group style={{marginLeft:"50px"}}>
                                            <Form.Label>Vendor</Form.Label>
                                            <Form.Control as="select">
                                            <option>Select Vendor</option>
                                                <option>Venues</option>
                                                <option>Photography</option>
                                                <option>DJ Sounds</option>
                                                <option>Event Management</option>
                                                <option>Makeup</option>
                                                <option>Decorators</option>
                                            </Form.Control>
                                        </Form.Group>
                                        </Form>
                                        <Form className="d-flex"> 
                               
                                         <Form.Group>
                                            <Form.Label>Redeem </Form.Label>
                                            <Form.Control type="text" placeholder="Search by Name"  />
                                            </Form.Group>
                                            <Form.Group style={{marginLeft:"50px"}}>
                                            <Form.Label>Choose Image </Form.Label><br />
                                            <input style={{marginTop: "10px"}} type="file" /> 

                                            </Form.Group>
                                        </Form>
                                        <br />
                                        <br />
                                        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
                                          <button  className="label theme-bg text-white f-12" style={{ color: "#fff",display: "flex", justifyContent: "center", alignItems: "center", padding: "6px 20px 6px 20px",border: "none", borderRadius: "5px", fontSize: "30px",fontWeight: "400",boxShadow: "0 1px 10px rgba(0,0,0,0.3)",cursor: "pointer" }} > Add Coupon </button>
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
