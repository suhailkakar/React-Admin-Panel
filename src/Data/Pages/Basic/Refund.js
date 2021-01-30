import React, {Component} from 'react';
import {
    Row,
    Col,
    Card, 
    Table,
    Form
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

class TabsPills extends Component {
        render() {
            return (
                <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h1">Refunds Page </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Customer Details	</th>
                                        <th></th>
                                        <th></th>
                                        <th>Vendor Details	</th>
                                        <th></th>
                                        <th></th>
                                        <th>Payments</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td><b>Name</b></td>  
                                        <td>Arya</td>
                                        <td></td>
                                        {/* ///////Vendor/////// */}
                                        <td><b>Name</b></td>  
                                        <td>Arya</td>
                                        <td></td>
                                         {/* ///////Payment/////// */}
                                         <td><b>Order Number</b></td>  
                                        <td>6789</td>
                                      
                                      
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td><b>Phone</b></td>
                                        <td>687688687</td>
                                        <td></td>
                                        {/* ///////Vendor/////// */}
                                        <td><b>Phone</b></td>
                                        <td>687688687</td>
                                        <td></td>
                                          {/* ///////Payment/////// */}
                                          <td><b>Order Date</b></td>  
                                        <td>12/12/2020</td>
                                   </tr>
                                   <tr>
                                        <th scope="row"></th>
                                        <td><b>Email</b></td>
                                        <td>info@email.com</td>
                                        <td></td>
                                        {/* ///////Vendor/////// */}
                                        <td><b>Email</b></td>
                                        <td>info@email.com</td>
                                        <td></td>

                                        {/* ///////Payment/////// */}
                                        <td>Refund Status</td>

                                        <Form.Group>

                                        <Form.Control as="select">
                                        <option>Refund  select</option>
                                        <option>Accept</option>
                                        <option>Pending</option>
                                        <option>Reject</option>
                                        <option>Cancel</option>
                                        </Form.Control>

                                        </Form.Group>
                                        </tr>
                                        <tr>
                                        <th scope="row"></th>
                                        <td><b>Event Date</b></td>
                                        <td>12/2/2020</td>
                                        <td></td>
                                        {/* ///////Vendor/////// */}
                                        <td><b>Address</b></td>
                                        <td>Warangal</td>
                                        <td></td>
                                        {/* ///////Payment/////// */}
                                        <td>Booked Price (GST)</td>
                                        <td>46534</td>

                                        </tr>

                                        <tr>
                                        <th scope="row"></th>
                                        <td><b></b></td>
                                        <td></td>
                                        <td></td>
                                        {/* ///////Vendor/////// */}
                                        <td><b></b></td>
                                        <td></td>
                                        <td></td>
                                        {/* ///////Payment/////// */}
                                        <td>Coupon Details</td>
                                        <td>N/A</td>

                                        </tr>
                               
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                       
                    </Col>
                </Row>
            </Aux>
        );
    }
    }

export default TabsPills;
