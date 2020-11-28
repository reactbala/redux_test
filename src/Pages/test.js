import React, { Component } from 'react';
import { Row, Col, CardBody, Card, Alert } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

// import Logo from "../../assets/images/lucastvslogo.jpg";

export default class Test extends Component {

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
     
    }


    componentDidMount()
    {
       
    }

    render() {

        return (
            <React.Fragment>
                <h1>Test</h1>
            </React.Fragment>
        );
    }
}



