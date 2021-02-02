import React, { useState } from "react";
import {
    Row,
    Col,
    Table,
    Button, render, props, MyVerticallyCenteredModal,
    OverlayTrigger,
    Modal,
    Tooltip,
    ButtonToolbar,
    Dropdown,
    DropdownButton,
    SplitButton
} from 'react-bootstrap';
import axios from 'axios';
import Aux from "../../hoc/_Aux";


class BasicButton extends React.Component {
    state = {
        users: [],
    };

    componentDidMount() {

        let currentToken = localStorage.getItem('token')
        currentToken = 'Bearer ' + currentToken
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': currentToken
        }

        axios.get('https://seheri.saikiranreddy.com/users/all', {
            headers: headers

        })
            .then((e) => {
                this.setState({ users: e.data })
                console.log(e.data)
            })




    }



    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Table responsive hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Business Name	</th>
                                    <th>Category</th>
                                    <th>Location (City)	 </th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map((data, id) =>
                                    <tr>
                                        <td className="pl-4">{id + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.businessName}</td>
                                        <td>{data.category}</td>
                                        <td>{data.location}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            {data.status == "1" &&
                                                <button style={{ borderRadius: "16px", fontSize: "14px" }} className="label theme-bg text-white f-1">Approved</button>
                                            }
                                            {data.status == "2" &&
                                                <button style={{ borderRadius: "15px", fontSize: "16px" }} className="label theme-bg text-white f-1">Rejected</button>
                                            }
                                        </td>
                                        <td>
                                            <a href={'vendor/wedding_hall/details?user_id=' + data._id}><button style={{ fontSize: "15px", borderRadius: "16px" }} className="label theme-bg2 text-white f-12" >View Details</button> </a>

                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Aux >
        );
    }
}


export default BasicButton;
