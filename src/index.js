import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import Test from './Pages/test';
import { PrivateRoute } from './Pages/private_router/PrivateRoute';
import ReactDOM from "react-dom";


// import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as redux from 'redux';

export const ADD_ROW = 'add_row'
export const DELETE_ROW = 'delete_row'
export const VALUE = 'value'

let initialState = {
  data_array: [
    // { id: 0, title: 1, description: "desc1" },
    // { id: 1, title: 2, description: "desc2" },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW: {
      let data = state.data_array
      let temp = data.push({ id: state.data_array.length + 1, title: state.data_array.length + 1, description: "desc1" })
      console.log("data", data)
      console.log("temp", temp)
      return {
        ...state,
        // data_array: temp
      };
      break;
    }
    case DELETE_ROW: {
      return {
        ...state,
        data_array: []
      };
      break;
    }
    default: {
      return state
    }
  }
}

const store = redux.createStore(reducer)
export default store
ReactDOM.render(
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
  ,
  document.getElementById('root')
);

// serviceWorker.unregister();
