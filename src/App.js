import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import axiosWithAuth from "./axios/helper";

function App() {
  useEffect(() => {
    axiosWithAuth()
      .get("https://kids-fly-backend.herokuapp.com/login", {
        // first_name: "darragh",
        // last_name: "ferry",
        // email: "darragh42",
        // password: "darragh42",
        // phone: "123",
        // is_admin: 0
        email: "bar",
        password: "bar"
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, {})(App);
