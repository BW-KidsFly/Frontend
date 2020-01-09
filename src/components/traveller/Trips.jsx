import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import EditTrip from "./EditTrip";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editValues, setEditValues] = useState({});

  const toggle = () => setEditModal(!editModal);

  useEffect(() => {
    withAuth()
      .get("https://kidsfly-eu.herokuapp.com/trips")
      .then(res => {
        console.log(res);
        setTrips(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  const editTrip = id => {
    setEditValues(trips.find(trip => trip.id === id));
    toggle();
  };

  return (
    <>
      {console.log(trips)}

      {trips.map(trip => {
        return (
          <Card key={trip.id} className="mt-3">
            <CardBody>
              <CardTitle>Arrival Airport: {trip.airport}</CardTitle>
              <CardSubtitle>Airline: {trip.airline}</CardSubtitle>
              <CardText>Departure Time: {trip.departure_time}</CardText>
              <CardText>Number of Kids <i className="fa fa-child" aria-hidden="true"></i> {trip.kids}</CardText>
              <Button
                onClick={event => {
                  event.preventDefault();
                  editTrip(trip.id);
                }}
              >
                Edit trip
              </Button>
            </CardBody>
          </Card>
        );
      })}

      <Modal isOpen={editModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit your Trip</ModalHeader>
        <ModalBody>
          <EditTrip editValues={editValues} />
        </ModalBody>
      </Modal>
    </>
  );
}
