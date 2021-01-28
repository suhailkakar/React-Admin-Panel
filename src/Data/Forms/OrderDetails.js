import React, {Component} from 'react';
import {
    Row,
    Col,
    Card, 
    Table
} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class Form extends Component {
        render() {
            return (
                <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                            <Card.Title as="h3">Details Page </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                   
                                    <tbody>
                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Order Id</b></td>
                                        <td></td>

                                        <td>34235</td>
                                        <td></td>

                                        <td><b>Order Status</b></td>
                                        <td>  <button style={{fontSize: "15px" ,borderRadius: "6px"}} className="label theme-bg text-white f-12"> Accepted </button></td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Booked on</b></td>
                                        <td></td>

                                        <td>18/02/2020	</td>
                                        <td></td>

                                        <td><b> Order Seen	</b></td>
                                        <td><i className="fa fa-check"> </i> Yes</td>
                                    </tr>

                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Business Name	</b></td>
                                        <td></td>

                                        <td>Laxmi Garden		</td>
                                        <td></td>

                                        <td><b> Business Type		</b></td>
                                        <td>Function/Banquet Hall</td>
                                    </tr>

                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Contact Name		</b></td>
                                        <td></td>

                                        <td>Kulsum		</td>
                                        <td></td>

                                        <td><b> Contact Email			</b></td>
                                        <td>kulsum@gmail.com </td>
                                    </tr>



                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Contact Phone			</b></td>
                                        <td></td>

                                        <td>978787897		</td>
                                        <td></td>

                                        <td><b> Location			</b></td>
                                        <td>Hanamkonda,Telangana</td>
                                    </tr>

                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Customer Name				</b></td>
                                        <td></td>

                                        <td>Ayra		</td>
                                        <td></td>

                                        <td><b> Customer Email				</b></td>
                                        <td>ayra@gmail.com</td>
                                    </tr>


                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Customer Phone				</b></td>
                                        <td></td>

                                        <td>9553693265		</td>
                                        <td></td>

                                        <td><b> Comments				</b></td>
                                        <td>Hey! Here is my comment</td>
                                    </tr>


                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>Purchased Price					</b></td>
                                        <td></td>

                                        <td>₹ 28,927		</td>
                                        <td></td>

                                        <td><b> Comments				</b></td>
                                        <td>Hey! Here is my comment</td>
                                    </tr>


                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>	Coupon Name					</b></td>
                                        <td></td>

                                        <td>NewYear10		</td>
                                        <td></td>

                                        <td><b> Coupon discount					</b></td>
                                        <td>10%</td>
                                    </tr>

                                    <tr>
                                    <td></td>
                                    <td></td>

                                        <td><b>	Coupon Start date						</b></td>
                                        <td></td>

                                        <td>01/01/2020			</td>
                                        <td></td>

                                        <td><b> Coupon End date						</b></td>
                                        <td>02/01/2020</td>
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

export default Form;
