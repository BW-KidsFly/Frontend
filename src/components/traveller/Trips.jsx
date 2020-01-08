import React, { useState, useEffect } from "react";
import withAuth from "../../axios/helper";
import Navigation from "../header/Navigation";

export default function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    withAuth()
      .get("https://kids-fly-backend.herokuapp.com/trips")
      .then(res => {
        setTrips(res.data);
      });
  }, []);

  return (
    <>

      {
          console.log(trips)
          
      }
    </>
  );
}
