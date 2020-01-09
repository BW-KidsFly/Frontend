import axiosWithAuth from "../helpers/axios";
import * as types from "./actionTypes";

export const getTrips = () => dispatch => {
  axiosWithAuth()
    .get("https://kidsfly-eu.herokuapp.com/trips")
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_TRIPS,
        payload: res.data
      });
    });
};

export const updateTrips = trip => {
  return {
    type: types.UPDATE_TRIPS,
    payload: trip
  };
};

export const deleteTripById = id => {
  console.log(id);
  return {
    type: types.DELETE_TRIP,
    payload: id
  };
};

export const addTrip = newTrip => {
  return {
    type: types.ADD_TRIP,
    payload: newTrip
  };
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

export const inputChange = ({ name, value }) => {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};
