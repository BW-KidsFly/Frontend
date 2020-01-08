import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

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
      {console.log(trips)}

      {trips.map(trip => {
        return (
          <Card key={trip.id} className="mt-3">
            <CardBody>
              <CardTitle>{trip.airport}</CardTitle>
              <CardSubtitle>{trip.airline}</CardSubtitle>
              <CardText>{trip.departure_time}</CardText>
              <CardText>{trip.kids}</CardText>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
}
