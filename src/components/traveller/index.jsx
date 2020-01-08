import React, { useState } from "react";
import { Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Navigation from "../header/Navigation";
import CreateTrip from "./CreateTrip";

export default function Trips() {
  const [createTrip, setCreateTrip] = useState(false);

  const toggle = () => setCreateTrip(!createTrip);

  return (
    <>
      <Navigation logout={true} />
      <Container>
        <div className="text-center mt-3">
          <Button color="danger" onClick={toggle}>
            CREATE TRIP
          </Button>
        </div>

        <Modal isOpen={createTrip} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add a Trip</ModalHeader>
          <ModalBody>
            <CreateTrip />
          </ModalBody>
        </Modal>

        <Trips/>
      </Container>
    </>
  );
}
