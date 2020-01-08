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
      .get("https://kids-fly-backend.herokuapp.com/trips")
      .then(res => {
        setTrips(res.data);
      });
  }, []);

  const editTrip = id => {
    setEditValues(trips.find(trip => trip.id === id));
    toggle();
  };

  return (
    <>
      {/* {console.log(trips)} */}

      {trips.map(trip => {
        return (
          <Card key={trip.id} className="mt-3">
            <CardBody>
              <CardTitle>{trip.airport}</CardTitle>
              <CardSubtitle>{trip.airline}</CardSubtitle>
              <CardText>{trip.departure_time}</CardText>
              <CardText>{trip.kids}</CardText>
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
