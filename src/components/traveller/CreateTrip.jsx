import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function CreateTrip() {
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

      <Button onClick={onSubmit}>Create Trip</Button>
    </Form>
  );
}
