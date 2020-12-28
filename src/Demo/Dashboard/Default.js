import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import axios from 'axios'
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';



class Dashboard extends React.Component {
    state = {
        users: [],
      };
    approveUser(e, val) {
        let currentToken = localStorage.getItem('token')
        currentToken = 'Bearer ' + currentToken
  const headers = {
     'Content-Type': 'application/json',
    'Authorization': currentToken
  } 
  let data = {
    "status": val
  }
        axios.patch('https://seheri.saikiranreddy.com/users/approve/' + e, data, {
            headers: headers
        })
        .then((e)=> {
            window.location.reload();
        })
    }
    
    componentDidMount() {
        let currentToken = localStorage.getItem('token')
        currentToken = 'Bearer ' + currentToken
  const headers = {
     'Content-Type': 'application/json',
    'Authorization': currentToken
  }
        axios.get('https://seheri.saikiranreddy.com/users', {
            headers: headers
        })
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
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Total Booking</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5"/>1000</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">100%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Pending Orders</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>80</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">100%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '100%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Total</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-yellow f-30 m-r-5"/>1080</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">100%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme5" role="progressbar" style={{width: '90%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>New Vendor Registrations </Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    {this.state.users.map(data=>    
                                    <tr className="unread">
                                        
                                    
                                    
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                        <td>
                                    <h6 className="mb-1">{data.businessName}</h6>
                                    <p className="m-0">{data.category}</p>
                                        </td>
                                        <td>
                                    <h6 className="text-muted"><i className="fa fa-map-marker text-c-red f-10 m-r-15"/>{data.location}</h6>
                                        </td>
                                        <td>
                                    <h6 className="text-muted"><i className="fa fa-envelope text-c-green f-10 m-r-15"/>{data.email}</h6>
                                        </td>
                                        <td>
                                    <h6 className="text-muted"><i className="fa fa-phone text-c-yellow f-10 m-r-15"/>{data.phone}</h6>
                                        </td>
                                        <td>
                                        <h6 className="text-muted"><i className="fa fa-user text-c-blue f-10 m-r-15"/>{data.name}</h6>
                                        </td>
                                        <td>
                                            <button onClick={() => this.approveUser(data._id, 1)} style={{border: "none"}} className="label theme-bg text-white f-12">Approve</button>
                                            <button onClick={() => this.approveUser(data._id, 2)} className="label theme-bg2 text-white f-12">Reject</button>
                                        </td>
                                    </tr>
                                    )}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>New User Registrations </Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    {this.state.users.map(data=>    
                                    <tr className="unread">
                                        
                                    
                                    
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                        <td>
                                    <h6 className="mb-1">{data.businessName}</h6>
                                    <p className="m-0">{data.category}</p>
                                        </td>
                                        <td>
                                    <h6 className="text-muted"><i className="fa fa-map-marker text-c-red f-10 m-r-15"/>{data.location}</h6>
                                        </td>
                                        <td>
                                    <h6 className="text-muted"><i className="fa fa-envelope text-c-green f-10 m-r-15"/>{data.email}</h6>
                                        </td>
                                        <td>
                                    <h6 className="text-muted"><i className="fa fa-phone text-c-yellow f-10 m-r-15"/>{data.phone}</h6>
                                        </td>
                                        <td>
                                        <h6 className="text-muted"><i className="fa fa-user text-c-blue f-10 m-r-15"/>{data.name}</h6>
                                        </td>
                                        <td>
                                            <button onClick={() => this.approveUser(data._id, 1)} style={{border: "none"}} className="label theme-bg text-white f-12">Approve</button>
                                            <button onClick={() => this.approveUser(data._id, 2)} className="label theme-bg2 text-white f-12">Reject</button>
                                        </td>
                                    </tr>
                                    )}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                 <Col md={11} xl={4}>

                        <Card>
                        <Card.Header>
                                <Card.Title as='h5'>App Usage & Registration </Card.Title>
                            </Card.Header>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-plus f-30 text-c-yellow"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">10</h3>
                                        <span className="d-block text-uppercase">New Downloads</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="fa fa-user f-30 text-c-green"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">236</h3>
                                        <span className="d-block text-uppercase">New Users</span>
                                    </div>
                                </div>
                            </Card.Body>
                          
                            
                        </Card>
                    </Col> 
                    <Col md={6} xl={4}>

<Card>
<Card.Header>
    <br />
    </Card.Header>
    <Card.Body className='border-bottom'>
        <div className="row d-flex align-items-center">
            <div className="col-auto">
                <i className="fa fa-trash f-30 text-c-red"/>
            </div>
            <div className="col">
                <h3 className="f-w-300">15</h3>
                <span className="d-block text-uppercase">New Uninstall</span>
            </div>
        </div>
    </Card.Body>
    <Card.Body className='border-bottom'>
        <div className="row d-flex align-items-center">
            <div className="col-auto">
                <i className="fa fa-users f-30 text-c-blue"/>
            </div>
            <div className="col">
                <h3 className="f-w-300">345</h3>
                <span className="d-block text-uppercase">Total Users</span>
            </div>
        </div>
    </Card.Body>
   
    
</Card>
</Col> 
<Col md={6} xl={4}>

<Card>
<Card.Header>
    <br />
    </Card.Header>
    <Card.Body className='border-bottom'>
        <div className="row d-flex align-items-center">
            <div className="col-auto">
                <i className="feather icon-download f-30 text-c-yellow"/>
            </div>
            <div className="col">
                <h3 className="f-w-300">10</h3>
                <span className="d-block text-uppercase">Total Install</span>
            </div>
        </div>
    </Card.Body>
    <Card.Body className='border-bottom'>
        <div className="row d-flex align-items-center">
            <div className="col-auto">
                <i className="fa fa-address-book f-30 text-c-red"/>
            </div>
            <div className="col">
                <h3 className="f-w-300">236</h3>
                <span className="d-block text-uppercase">New Vendors</span>
            </div>
        </div>
    </Card.Body>

    
</Card>
</Col>  
              </Row>
            </Aux>
        );
    }
}

export default Dashboard;