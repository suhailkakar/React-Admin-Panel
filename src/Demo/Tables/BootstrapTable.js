import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h1">Ratings & Reviews Page</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Reviews</th>
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

export default BootstrapTable;