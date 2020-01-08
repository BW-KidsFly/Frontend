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

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  is_admin: 0
};
export function registerFormReducer(form = initialForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...form,
        [action.payload.name]: action.payload.value
      };
    case types.SUBMIT:
      return initialForm;
    default:
      return form;
  }
}
