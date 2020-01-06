import * as types from "./actionTypes";

const initialTrips = [];
export function tripsReducer(trips = initialTrips, action) {
  switch (action.type) {
    case types.GET_TRIPS:
      return action.payload;
  }
}
