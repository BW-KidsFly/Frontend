import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import withAuth from "../../helpers/axios";
import { addTrip } from "../../state/actionCreators";
import { connect } from "react-redux";

export function CreateTrip({ addTrip, toggle }) {
  const [formValues, setFormValues] = useState({
    airport: "",
    airline: "",
    departure_time: "",
    kids: "",
    is_arriving: 0
  });

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    const newTrip = {
      ...formValues
    };
    console.log(newTrip);
    withAuth()
      .post("https://kidsfly-eu.herokuapp.com/trips", newTrip)
      .then(res => {
        addTrip(newTrip);
        alert("Created a new Trip");
        toggle();
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="airport">Airport</Label>
        <Input
          type="text"
          name="airport"
          id="airport"
          placeholder="Airport"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="airline">Airline</Label>
        <Input
          type="text"
          name="airline"
          id="airline"
          placeholder="airline"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="departure_time">Departure Time</Label>
        <Input
          type="datetime-local"
          name="departure_time"
          id="departure_time"
          placeholder="departure_time"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="kids">Number of Kids</Label>
        <Input
          type="number"
          name="kids"
          id="kids"
          placeholder="kids"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <Button onClick={onSubmit} color="success">Create Trip</Button>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, { addTrip })(CreateTrip);
