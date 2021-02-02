import React, { Component } from "react";
import { Row, Col, Card, Table, Form } from "react-bootstrap";

import Aux from "../../../hoc/_Aux";
import axios from 'axios';
import DatePicker from 'react-date-picker'
class BasicTypography extends Component {


  state = {
    users: [],
  };

  componentDidMount() {
    // const value = await AsyncStorage.getItem("userId");
    const token = localStorage.getItem('token')
    let headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get("https://seheri.saikiranreddy.com/users/vendorpendingorders/60057c0008779a91704d7c47", headers).then((e) => {
      this.setState({ users: e.data });
      // console.log(users)

    });

  }

  render() {
    return (
      <Aux>
        <Row>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Daily Orders</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                      30
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">30%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Monthly Orders</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                      70
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">70%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme2"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Total Orders</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-down text-c-yellow f-30 m-r-5" />
                      100
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">100%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme5"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Form style={{ marginLeft: "19px" }}>
            <Form.Group
              className="d-flex flex-row"
              style={{ marginLeft: "19px" }}
              controlId="form"
            >
              <Form.Control type="text" placeholder="Search by Name" />
              <Form.Control style={{ marginLeft: "19px" }} as="select">
                <option>City</option>
                <option>Warangal</option>
                <option>Khamam</option>
              </Form.Control>

              <Form.Control
                style={{ marginLeft: "19px" }}
                type="date"
                placeholder="DD-MM-YYYY"
              />

              <button
                style={{
                  color: "#fff",
                  marginLeft: "19px",
                  background: "#04A9F5",
                  padding: "1px 11px 1px 11px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  fontWeight: "400",
                  boxShadow: "0 1px 10px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                }}
              >
                {" "}
                Search{" "}
              </button>
            </Form.Group>
          </Form>
          <Col md={12}>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Order Details </Card.Title>
              </Card.Header>
              <Card.Body className="px-0 py-2">
                {/* {this.state.users.map((data, id) =>   */}

                <Table responsive hover>
                  <tbody>
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          src="https://i.ibb.co/zHYzx0f/download.jpg"
                          style={{ width: "40px" }}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">AJ Photography</h6>
                        <p className="m-0">Photographer</p>
                      </td>
                      <td>
                        <button
                          style={{
                            color: "#fff",
                            background: "#F4C22B",
                            padding: "5px 5px",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "16px",
                            fontWeight: "400",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            cursor: "pointer",
                          }}
                        >
                          Function/Banquet Hall
                        </button>
                        <br />
                        <br />
                        <h6 className="text-muted">
                          <i className="fa fa-map-marker text-c-red f-10 m-r-15" />
                          Hanamkonda, Telangana
                        </h6>
                      </td>
                      <td>
                        <br />
                        <br />
                        <br />
                        <h6 className="text-muted">
                          <i className="fa fa-envelope text-c-green f-10 m-r-15" />
                          email@domain.com
                        </h6>
                      </td>
                      <td>
                        <br />
                        <br />
                        <br />
                        <h6 className="text-muted">
                          <i className="fa fa-phone text-c-yellow f-10 m-r-15" />
                          +91 9988776633
                        </h6>
                      </td>
                      <td>
                        <p>Booked Date:12/04/2020</p>
                        <br />
                        <h6 className="text-muted">
                          <i className="fa fa-user text-c-blue f-10 m-r-15" />
                          Name Here
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <p>
                          <b>RS.20,478</b>
                        </p>
                        <br />
                        <a href="/orders/details">
                          <button
                            style={{ fontSize: "15px", borderRadius: "16px" }}
                            className="label theme-bg text-white f-12"
                          >
                            View Details
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                {/* )} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BasicTypography;
