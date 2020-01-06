import axiosWithAuth from "../axios/helper";
import * as types from "./actionTypes";

export const getTrips = () => dispatch => {
  axiosWithAuth()
    .get("https://kids-fly-backend.herokuapp.com/trips")
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_TRIPS,
        payload: res
      });
    });
};

export const getUser = id => dispatch => {
  axiosWithAuth()
    .get(`https://kids-fly-backend.herokuapp.com/users/${id}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_USER,
        payload: res
      });
    });
};
