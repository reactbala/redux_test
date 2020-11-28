import React, { Component } from 'react';
import { Row, Col, CardBody, Card, Alert } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

// import Logo from "../../assets/images/lucastvslogo.jpg";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginfailed: false
        }

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // Login Submit
    handleValidSubmit(event, values) {
        console.log(values)
        this.setState({
            loading: true,
            username:values.username,
            password:values.password,
        })
        localStorage.setItem('auth', true );
        this.props.history.push("/dashboard");
    }


    componentDidMount() {

    }

    render() {

        return (
            <React.Fragment>
                <div style={{ marginTop: "50px", visibility: "hidden" }}>Login</div>
                <div className="wrapper fadeInDown">
                    <AvForm className="form-horizontal formContent pad15" onValidSubmit={this.handleValidSubmit} style={{    background: "white"}}>
                        {this.state.loginfailed ? <Alert color="danger">Check the Username and Password</Alert> : null}

                        <div className="form-group">
                            <AvField name="username" label="Username" value="" type="text" required  />
                            <AvField name="password" label="Password" value="" type="password" required  />
                        </div>

                        <div className="mt-3">
                            <button className="btn btn-primary btn-block waves-effect waves-light" type="submit"> {this.state.loading ? "Loading" : "Log In"} </button>
                        </div>
                    </AvForm>
                </div>
            </React.Fragment>
        );
    }
}



