import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import axios from 'axios';


class Failed extends Component {
    render() {
        return <h1>asdas</h1>
    }
}
export default Failed

class SignIn extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            password: '',
            email: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ password: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            password: this.state.password,
            email: this.state.email
        };

        axios.post('https://seheri.saikiranreddy.com/usersignup/adminlogin', userObject)
            .then(e => {
                console.log(e.data.success)
                localStorage.setItem('token', e.data.token)
                if (e.data.success == "1") {
                    this.props.history.push("/dashboard/default");
                }
                if (e.data.success == "4") {
                    this.props.history.push("/signin");
                }
            })

        this.setState({ password: '', email: '' })

    }


    render() {
        return (
            <Aux>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <img src="https://i.ibb.co/Jc9wq70/1-1.png" />
                                </div>
                                <h3 className="mb-4">Seheri Vibes</h3>
                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group mb-3">
                                        <input type="email" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" placeholder="Email" required autocomplete='false' />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="password" value={this.state.password} onChange={this.onChangeUserName} className="form-control" placeholder="Password" required autocomplete='false' />
                                    </div>

                                    <input type="submit" value=" Login " className="btnlogin shadow-2 mb-4" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>


        )
    }
}