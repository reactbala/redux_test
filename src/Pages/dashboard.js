import React, { Component } from 'react';
import { Row, Col, CardBody, Card, Container } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Cardrow from './component/card';
import { FaRegEdit, FaPlusCircle } from 'react-icons/fa';
import { AiOutlineLogout } from "react-icons/ai";
import store, { ADD_ROW, DELETE_ROW } from '../index';

// import Logo from "../../assets/images/lucastvslogo.jpg";
import '../App.css'
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_array: [],
            edit_id: null,
        }

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ data_array: store.getState().data_array })
    }

    handleValidSubmit(event, values) {
        if (values.title == "" && values.description == "") {
            return 0
        }
        let data = this.state.data_array
        if (this.state.edit_id != null) {

            console.log("edit")

            let temp =
            {
                id: data.length,
                title: this.state.title,
                description: this.state.description,

            }

            data.splice(this.state.edit_id, 1, temp);
            console.log(data)
            this.setState({ edit_id: null })
        }
        else {
            console.log("Add")
            store.dispatch({ type: ADD_ROW })
            this.setState({ data_array: store.getState().data_array })
            this.setState({ edit_id: null })
        }
        this.setState({
            description: "",
            title: "",
        })

    }


    logout = () => {
        localStorage.removeItem("auth");
        this.props.history.push("/login");

    }
    edit_data = (data, index, alldata) => {
        console.log(alldata)
        let title = data.title
        let description = data.description
        this.setState({
            edit_id: index,
            description,
            title
        })
        store.dispatch({ type: DELETE_ROW })
        this.setState({ data_array: store.getState().data_array })
    }

    delete_data = (index, alldata) => {
        alldata.splice(index, 1);
        this.setState({ data_array: alldata })
    }

    delete_all = () => {
        store.dispatch({ type: DELETE_ROW })
        this.setState({ data_array: store.getState().data_array })
    }

    render() {
        return (
            <Container className="mt20">
                <div className="top_nav">
                    <h1>Dashboard</h1>
                    <div className="align-self-center">
                        <h4 onClick={this.logout}>Logout <AiOutlineLogout /></h4>
                    </div>
                </div>
                <>
                    <AvForm onValidSubmit={this.handleValidSubmit}>
                        <div style={{ display: "flex" }}>
                            <Col md={3}>
                                <AvField name="title"
                                    label="Title"
                                    value={this.state.title}
                                    onChange={(event) => { this.state.title = event.target.value }}
                                    type="text"
                                //  required 
                                />
                            </Col>
                            <Col md={3}>

                                <AvField
                                    name="description"
                                    label="Description"
                                    value={this.state.description}
                                    onChange={(event) => { this.state.description = event.target.value }}
                                    type="text"
                                // required
                                />
                            </Col>

                            <Col md={3} className="btn_align_ctr">
                                <button className="btn btn-primary  waves-effect waves-light" type="submit" style={{ height: 35 }}> {this.state.edit_id != null ? <FaRegEdit /> : < FaPlusCircle />}  </button>
                            </Col>
                            <Col md={3} className="btn_align_ctr text-right">
                                <button className="btn btn-danger  waves-effect waves-light" onClick={()=>this.delete_all()} style={{ height: 35 }}> Clear All</button>
                            </Col>
                        </div>

                    </AvForm>
                </>
                <hr />
                {
                    this.state.data_array.map((data, index, alldata) => (
                        <div key={index}>
                            <Cardrow title={data.title} description={data.description} edit_data={() => this.edit_data(data, index, alldata)} delete_data={() => this.delete_data(index, alldata)} />
                        </div>
                    ))
                }

            </Container>
        );
    }
}



