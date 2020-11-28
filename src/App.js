
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import Test from './Pages/test';
import { PrivateRoute } from './Pages/private_router/PrivateRoute';


// import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as redux from 'redux';

export const ADD_ROW = 'add_row'
export const DELETE_ROW = 'delete_row'


const initialState = {
  count : 0,
  // data_array: [
  //   {id: 0,  title: "",  description: ""}
  // ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW: {
      return {
        ...state,
        count: state.count
      };
      break;
    }
    case DELETE_ROW: {
      return {
        ...state,
        count: state.count
      };
      break;
    }
    default: {
      return state
    }
  }
}
export const store = redux.createStore(reducer)


export default class app_class extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/Test" component={Test} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/Login" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}


