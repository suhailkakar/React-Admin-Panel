import React, { Component } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import axios from "axios";

import Aux from "../../../hoc/_Aux";

class BreadcrumbPagination extends Component {
  state = {
    users: [],
  };
  
  componentDidMount() {

    const urlParams = new URLSearchParams(this.props.location.search);
    const key = urlParams.get("user_id");
    
    let currentToken = localStorage.getItem('token')
    currentToken = 'Bearer ' + currentToken
    const headers = {
    'Content-Type': 'application/json',
    'Authorization': currentToken 
    }
    
    axios.get("https://seheri.saikiranreddy.com/users/" + key, {
      headers: headers
    }).then((e) => {
      this.setState({ users: e.data });
      console.log(e.data);
    });
  }
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Table responsive hover>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{ fontSize: "26px" }}>
                        <i className="feather icon-file-text"> </i> Business
                        Info
                      </td>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>Business Name : </td>
                      <td>{this.state.users.businessName}</td>
                      <td></td>
                      <td>Location</td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.location}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td> <td></td>
                      <td></td> <td></td>
                    </tr>
                    <tr>
                      <td>Description : </td>
                      <td>{this.state.users.description}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td> <td></td>
                      <td></td>
                      <td></td>
                      <td></td> <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: "26px" }}>
                        <i className="feather icon-calendar"> </i> Blocked Dates
                      </td>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>29/04/2020 (NA)</td>
                      <td>29/04/2020 (NA)</td>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>{" "}
                    </tr>
                    <tr>
                      <td style={{ fontSize: "26px" }}>
                        <i className="feather icon-user"> </i> Contact Info
                      </td>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> Name </td>
                      <td>{this.state.users.name}</td>
                      <td></td>
                      <td>Email</td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.email}</td>
                      <td></td>
                      <td>Phone</td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.phone}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <td style={{ fontSize: "26px" }}>
                      <i className="feather icon-pie-chart"> </i> Services{" "}
                    </td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <tr>
                      <td> Capacity </td>
                      <td>1500 people </td>
                      <td></td>
                      <td>Food Catering </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bol_food}</td>
                      <td></td>
                      <td>DJ Sounds </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bol_dj}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> Decoration </td>
                      <td>{this.state.users.bol_decoration}</td>

                      <td></td>
                      <td>Room Available </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.seating_capacity}</td>
                      <td></td>
                      <td>Veg/non-Veg </td>
                      <td></td>
                      <td></td>
                      <td>Veg</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> Alcohol </td>
                      <td>{this.state.users.bol_alcohol}</td>
                      <td></td>
                      <td>AC/non-AC </td>
                      <td></td>
                      <td></td>
                      <td>AC</td>
                      <td></td>
                      <td>Parking </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bol_parking}</td>

                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> WIFI </td>
                      <td>{this.state.users.bol_wifi}</td>

                      <td></td>
                      <td>Electricity </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bol_electricity}</td>

                      <td></td>
                      <td>Water </td>
                      <td></td>
                      <td></td>
                      <td>
No
                      </td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> Tent House </td>
                      <td>{this.state.users.bol_tentHouse}</td>

                      <td></td>
                      <td>Table/Chairs </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bol_tables}</td>

                      <td></td>
                      <td>Kitchen Untensils </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bol_kitchen}</td>

                      <td></td>
                      <td></td>
                    </tr>

                    <td style={{ fontSize: "26px" }}>
                      <i className="feather icon-credit-card"> </i> Payment
                      Details
                    </td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <tr>
                      <td> Payee Name </td>
                      <td>{this.state.users.bank_paypee}</td>
                      <td></td>
                      <td>Email </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bank_email}</td>
                      <td></td>
                      <td>UPI Number </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bank_upi_number}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> Booking Fees </td>
                      <td> 50,000 </td>
                      <td></td>
                      <td>Prices Starting From </td>
                      <td></td>
                      <td></td>
                      <td>Rs.10,000-50,000</td>
                      <td></td>
                      <td>Account No </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bank_account_number}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td> IFSC code </td>
                      <td>{this.state.users.bank_ifsc}</td>
                      <td></td>
                      <td>GST Type </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bank_gst_type}</td>
                      <td></td>
                      <td>GST Number </td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.bank_gst_number}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: "26px" }}>
                        <i className="feather icon-user"> </i> Social Media                    
                     </td>
                     <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                      <td> Website </td>
                      <td>{this.state.users.websites}</td>
                      <td></td>
                      <td>Facebok</td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.facebook_id}</td>
                      <td></td>
                      <td>Youtube</td>
                      <td></td>
                      <td></td>
                      <td>{this.state.users.youtube_url}</td>
                      <td></td>
                      <td></td>
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
