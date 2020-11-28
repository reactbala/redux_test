import React, { Component } from 'react';
import { Row, Col, CardBody, Card, Alert } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Cardrow from './component/card';
import { FaRegEdit, FaPlusCircle } from 'react-icons/fa';
import { AiOutlineLogout } from "react-icons/ai";
import store, { ADD_ROW, DELETE_ROW } from '../App';

// import Logo from "../../assets/images/lucastvslogo.jpg";

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_array: [],
            edit_id: null,
            value: null,
        }

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    componentDidMount() {
        // this.setState({ value: store.getState().count })
        // console.log(this.state.value)
    }
    // Login Submit
    handleValidSubmit(event, values) {
        console.log(values)
        if (values.title == "" && values.description == "") {
            return 0
        }
        let data = this.state.data_array
        if (this.state.edit_id != null) {


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
            data.push({
                id: data.length,
                title: values.title,
                description: values.description,

            })
        }
        this.setState({
            data_array: data,
            description: "",
            title: "",
        })
        // this.test()
    }
    test() {
        store.dispatch({ type: ADD_ROW })
        this.setState({ value: store.getState().data_array })
        console.log(store.getState().data_array)
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

    }

    delete_data = (index, alldata) => {
        alldata.splice(index, 1);
        this.setState({ data_array: alldata })
    }

    render() {
        return (
            <div className="margin10">
                <h1>Dashboard</h1>
                <button className="btn btn-primary  waves-effect waves-light" onClick={this.logout}>Logout <AiOutlineLogout /></button>
                <>
                    <AvForm onValidSubmit={this.handleValidSubmit}>
                        <div style={{ display: "flex" }}>
                            <AvField name="title"
                                label="Title"
                                value={this.state.title}
                                onChange={(event) => { this.state.title = event.target.value }}
                                type="text"
                            //  required 
                            />

                            <AvField
                                name="description"
                                label="Description"
                                value={this.state.description}
                                onChange={(event) => { this.state.description = event.target.value }}
                                type="text"
                            // required
                            />
                            <div className="align-self-center">
                                <button className="btn btn-primary  waves-effect waves-light" type="submit" style={{ height: 35 }}> {this.state.edit_id != null ? <FaRegEdit /> : < FaPlusCircle />}  </button>
                            </div>
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

            </div>
        );
    }
}



