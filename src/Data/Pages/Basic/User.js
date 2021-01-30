import React, { useState } from "react";
import {
    Row,
    Col,
    Table,
    Button,render,props,MyVerticallyCenteredModal,
    OverlayTrigger,
    Modal,
    Tooltip,
    ButtonToolbar,
    Dropdown,
    DropdownButton,
    SplitButton
} from 'react-bootstrap';
import axios from 'axios';
import Aux from "../../../hoc/_Aux";
import Card from "../../../App/components/MainCard";
import UcFirst from "../../../App/components/UcFirst";

class BasicButton extends React.Component {
    
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                    <Card>
                        <p>Coming Soon :)</p>
                    </Card>
                      
                   </Col>
                </Row>

            </Aux>
        );
    }
}


  export default BasicButton;
