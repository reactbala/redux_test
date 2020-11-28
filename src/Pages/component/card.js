import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Card, CardBody, Button, Media, UncontrolledTooltip } from "reactstrap";

import { FaPencilAlt, } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";

class Cardrow extends Component {


    render() {
        return (
            <React.Fragment>
                <Card >
                    <div className="card_in">
                        <div className="align-self-center">
                            <h5 className="text-truncate font-size-15">{this.props.title}</h5>
                            <div className="text-muted">{this.props.description}</div>
                        </div>
                        <div className="align-self-center">
                            <Button color="primary" onClick={this.props.edit_data}><FaPencilAlt /></Button>
                            <Button color="danger" onClick={this.props.delete_data}><AiFillDelete /></Button>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

export default Cardrow;