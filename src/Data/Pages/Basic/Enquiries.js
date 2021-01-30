import React, {Component} from 'react';
import {
    Row,
    Col,
    Card, 
    Table
} from 'react-bootstrap';
import { Link } from 'react-router';

import Aux from "../../../hoc/_Aux";

class BreadcrumbPagination extends Component {
        render() {
            return (
                <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h2">Enquiries Page </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Message</th>
                                    <th>Added on </th>
                                    <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr><tr>
                                        <th scope="row">4</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr><tr>
                                        <th scope="row">5</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr><tr>
                                        <th scope="row">6</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr><tr>
                                        <th scope="row">7</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr><tr>
                                        <th scope="row">8</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td> 
                                        <td>Mark</td>
                                        <td>Otto</td>
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

export default BreadcrumbPagination;
