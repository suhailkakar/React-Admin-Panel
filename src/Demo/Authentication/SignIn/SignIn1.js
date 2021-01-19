import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import axios from 'axios';

class SignUp1 extends React.Component {
    submitFunc() {
        console.log("jkasdhna")
        axios.post('https://seheri.saikiranreddy.com/usersignup/login', {
            "emailphone": "john@test.com",
            "password": "123456"
        })
            .then(e => {
                localStorage.setItem('token', e.data.token)
            })
    }
    render () {
        return(
            <Aux>
                <div className="auth-wrapper">
                    <div className="auth-content">
                         <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                             <div className="card-body text-center">
                                <div className="mb-4">
                                    <img src="https://i.ibb.co/Jc9wq70/1-1.png" />
                                </div>
                                <h3 className="mb-4">Seheri Vibes</h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" required autocomplete='false'/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password" required autocomplete='false'/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr" > Save credentials</label>
                                    </div>
                                </div>
                                <button className="btnlogin shadow-2 mb-4" onClick={this.submitFunc()}> <NavLink style={{ color: "white" }} to="../dashboard/default">Login</NavLink></button>
                            </div> 
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;