import React, {Component} from 'react';
import {
    Row,
    Col,
    Card, 
    Table
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import axios from 'axios'

class Badges extends Component {
        state = {
          users: [],
        };
        componentDidMount() {
            axios.get('https://seheriapi.waytoskill.com/contact/')
            .then((e) =>{
                this.setState({users: e.data})
                console.log(e.data)
            })
            const urlParams = new URLSearchParams(this.props.location.search)
            const key = urlParams.get('user_id')
            console.log(key)
        }

    render() {
        return (
            <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h1">Contact Page</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Message</th>
                                    <th>User Type</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.users.map(data=>    
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{data.fullname}</td>
                                    <td>{data.mobilenumber}</td>
                                    <td>{data.message}</td> 
                                    <td>  <button style={{fontSize: "15px" ,borderRadius: "6px"}} className="label theme-bg text-white f-12"> Vendor </button></td>
                                </tr>
                                  )}

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

export default Badges;