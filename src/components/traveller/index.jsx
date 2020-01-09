import React, { useState } from "react";
import { Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Navigation from "../header/Navigation";
import CreateTrip from "./CreateTrip";
import Trips from "./Trips";

export default function TravellerDash() {
  const [createTrip, setCreateTrip] = useState(false);

  const toggle = () => setCreateTrip(!createTrip);

  return (
    <>
      <Navigation logout={true} />
      <Container>
        <Modal isOpen={createTrip} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add a Trip</ModalHeader>
          <ModalBody>
            <CreateTrip />
          </ModalBody>
        </Modal>

        <h2 className="text-center mt-3">Your Trips</h2>
        <div className="text-center mt-3">
          <Button color="primary" onClick={toggle} className="w-100">
            CREATE TRIP
          </Button>
        </div>
        <Trips toggle={toggle} />
      </Container>
    </>
  );
}
