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

        axios.get('https://seheri.saikiranreddy.com/users/photographer/all', {
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
                        {/* <Card title="Vendors">
                      <button style={{ color: "#fff", background: "#FE5795", padding: "19px 49px", border: "none", borderRadius: "5px", fontSize: "26px",fontWeight: "400", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                                   <i style={{  fontSize: "66px" }} class="fa fa-home" ></i>{'\u00A0'} 40  Venues
                               </button>
                               <button style={{ color: "#fff", background: "#1EE9B7",marginLeft:"3%", padding: "19px 49px", border: "none", borderRadius: "5px", fontSize: "26px",fontWeight: "400", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                               <i style={{  fontSize: "66px" }} class="fa fa-camera" ></i>{'\u00A0'} 50  Photography
                               </button>
                               <button style={{ color: "#fff", background: "#04A9F5",marginLeft:"3%", padding: "19px 49px", border: "none", borderRadius: "5px", fontSize: "26px",fontWeight: "400", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                               <i style={{  fontSize: "66px" }} class="fa fa-music" ></i>{'\u00A0'} 29  DJ Sound</button>

                        </Card>
                        <div >
                        <button style={{ color: "#fff", background: "#F4C22B",marginLeft:"2%", padding: "19px 34px", border: "none", borderRadius: "5px", fontSize: "26px",fontWeight: "400", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                               <i style={{  fontSize: "66px" }} class="fa fa-paint-brush" ></i >{'\u00A0'} 30  Makeup{'\u00A0'}{'\u00A0'}
                               </button>
                                
                               <button style={{ color: "#fff", background: "#A389D4",marginLeft:"3%", padding: "19px 39px", border: "none", borderRadius: "5px", fontSize: "26px",fontWeight: "400", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                               <i style={{  fontSize: "66px" }}  class="fa fa-calendar" ></i> {'\u00A0'}{'\u00A0'}40  Event Manag.{'\u00A0'}{'\u00A0'}
                               </button>
                        <button style={{ color: "#fff", backgroundColor:'#F44236',marginLeft:"3%", padding: "19px 39px", border: "none", borderRadius: "5px", fontSize: "26px",fontWeight: "400", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                                   <i  style={{  fontSize: "66px" }} class="fa fa-gift" ></i> {'\u00A0'}{'\u00A0'} 90  Decorators
                               </button>
                               </div> */}

                        <Table responsive hover>
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
                                            <a href={'/vendor/photographer/details?user_id=' + data._id}><button style={{ fontSize: "15px", borderRadius: "16px" }} className="label theme-bg2 text-white f-12" >View Details</button> </a>

                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Aux>
        );
    }
}


export default BasicButton;
