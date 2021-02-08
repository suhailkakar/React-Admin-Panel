import React, {Component}from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import ImageUploading from "react-images-uploading";
import Icon from "react-eva-icons";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offername: [],
            offerdescription: [],
            image: [],
            offername: '',
            offerdescription: ''
        };
      }
     
      offernamefunction = (event) => {
        this.setState({offername: event.target.value});
      }
      offerdescriptionfunction = (event) => {
        this.setState({offerdescription: event.target.value});
      }
    render() {
    
        const onChange = (imageList, addUpdateIndex) => {
            // data for submit
            console.log(imageList, addUpdateIndex);
            this.setState({ image: imageList })
          };
     const  mySubmitHandler = (event) => {
            alert("Offer Added Successfully");
            console.log("dasdas",this.state.image[0].data_url);
      }
        
    return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add Offers</Card.Title>
            </Card.Header>
            <Card.Body>
              <h5>Offers Options </h5>
              <hr />
              <Row>
                <Col md={6} className="d-flex">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label> Name of the Offer</Form.Label>
                      <Form.Control
                        style={{ width: "490px" }}
                        onChange={this.offernamefunction}
                        type="text"
                        placeholder="Enter the Offer Name"
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group style={{ marginLeft: "50px" }}>
                    <ImageUploading
                      value={this.state.image}
                      onChange={onChange}
                      maxNumber='1'
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          <button
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                            className="label theme-bg2 text-white f-12"
                            style={{
                              fontSize: '89%',
                              padding: '2%',
                              borderRadius: 5,
                              marginTop: "5%",
                            }}
                          >
                            <Icon
                              name="cloud-upload-outline"
                              fill="#fff"
                              size="xlarge" // small, medium, large, xlarge
                              animation={{
                                type: "shake", // zoom, pulse, shake, flip
                                hover: true,
                                infinite: true,
                              }}
                            />
                            &nbsp; &nbsp; Click or Drop Image here &nbsp;
                          </button>
                          &nbsp;
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <p>{image.file.name}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      onChange={this.offerdescriptionfunction}
                      as="textarea"
                      placeholder="Enter detailed information regarding the coupon"
                      rows="3"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <br />
                  <br />
        
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >

                    <button
                    onClick={mySubmitHandler}
                      className="label theme-bg2 text-white f-12"
                      style={{
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "6px 20px 6px 20px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "30px",
                        fontWeight: "400",
                        boxShadow: "0 1px 10px rgba(0,0,0,0.3)",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Add Offer{" "}
                    </button>
                  </div>
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

