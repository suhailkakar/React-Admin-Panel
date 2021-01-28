import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import emailjs from 'emailjs-com';

import Aux from "../../../hoc/_Aux";

class FormsElements extends React.Component {

    render() {

        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_z0e9906', 'template_gyrz3rc', e.target, 'user_xYPAWUmS30efGxzm10wxF')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          }
        
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Send Emails</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Email Options</h5>
                                <hr/>
                                <Row>
                                    <Col md={6} className="d-flex">
                                       
                                    <form className="contact-form" onSubmit={sendEmail}>
                                      <input type="hidden" style={{padding: '33px'}} name="contact_number" />

                                      <div style={{display:'flex',}}> 

                                        <div>
                                        <label>Name</label> <br />

                                          <input style={{borderRadius: '3px', border: '1px solid #ced4da', background: '#f4f7fa', padding:' 10px 20px',paddingRight: '250px', fontSize: '14px'  }} type="text" name="user_name" />
                                         </div>

                                         <div>
                                         <label style={{ marginLeft : '79px'}}>Email</label> <br />

                                           <input style={{borderRadius: '3px', border: '1px solid #ced4da', background: '#f4f7fa', marginLeft : '79px',padding:' 10px 20px',paddingRight: '250px', fontSize: '14px'  }}  type="email" name="user_email" />

                                           </div>
                                           </div>
                                           <label style={{marginTop: '30px'}}>Password / Message</label> <br />

                                           <textarea style={{borderRadius: '3px', border: '1px solid #ced4da', background: '#f4f7fa' , padding:' 10px 20px',paddingRight: '765px', fontSize: '14px'  }} name="message" />
                                  
                                  
                                     <input   className="label theme-bg text-white f-12" style={{ color: "#fff", marginLeft: '45%',marginTop: '6%', display: "flex", justifyContent: "center", alignItems: "center", padding: "3px 25px 3px 25px",border: "none", borderRadius: "5px", fontSize: "30px",fontWeight: "400",boxShadow: "0 1px 10px rgba(0,0,0,0.3)",cursor: "pointer" }} type="submit"value="Send" />
                                        </form>

                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                            
                                     
                                        <br />
                                        <br />
                                       


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
