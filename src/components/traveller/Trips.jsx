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
import { connect } from "react-redux";
import { getTrips } from "../../state/actionCreators";

export function Trips({ trips, getTrips }) {
  // const [trips, setTrips] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editValues, setEditValues] = useState({});

  const toggle = () => setEditModal(!editModal);

  useEffect(() => {
    // withAuth()
    //   .get("https://kidsfly-eu.herokuapp.com/trips")
    //   .then(res => {
    //     console.log(res);
    //     setTrips(res.data);
    //   })
    //   .catch(err => {
    //     alert(err.message);
    //   });
    getTrips();
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
              <CardText>
                Number of Kids{" "}
                <i className="fa fa-child" aria-hidden="true"></i> {trip.kids}
              </CardText>
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

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, { getTrips })(Trips);
