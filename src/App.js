import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import TravellerDash from "./components/traveller/";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route
        exact
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />

      <Route
        exact
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />

      <Route
        exact
        path="/traveller"
        render={props => {
          return <TravellerDash {...props} />;
        }}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, {})(App);
