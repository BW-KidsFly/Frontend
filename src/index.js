import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { tripsReducer, userReducer } from "./state/reducers";
import { BrowserRouter as Router } from "react-router-dom";

const monsterReducer = combineReducers({
  trips: tripsReducer,
  user: userReducer
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
