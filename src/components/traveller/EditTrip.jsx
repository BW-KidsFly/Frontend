import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function EditTrip({ editValues }) {
  const [formValues, setFormValues] = useState({
    airport: "",
    airline: "",
    departure_time: "",
    kids: ""
  });

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(formValues);
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
          value={editValues.airport}
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
          value={editValues.airline}
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
          value={editValues.departure_time}
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
          value={editValues.kids}
          required
        />
      </FormGroup>

      <Button onClick={onSubmit}>Create Trip</Button>
    </Form>
  );
}
