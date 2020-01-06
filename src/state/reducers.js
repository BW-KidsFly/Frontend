import * as types from "./actionTypes";

const initialTrips = [];
export function tripsReducer(trips = initialTrips, action) {
  switch (action.type) {
    case types.GET_TRIPS:
      return action.payload;
    default:
      return trips;
  }
}

const initialUser = {
  id: NaN,
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  is_admin: 0,
  airport: ""
};
export function userReducer(user = initialUser, action) {
  switch (action.type) {
    case types.GET_USER:
      return action.payload;
    default:
      return user;
  }
}
