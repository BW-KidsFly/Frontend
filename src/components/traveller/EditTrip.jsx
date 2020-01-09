import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { updateTrips } from "../../state/actionCreators";

export function EditTrip({ editValues, updateTrips }) {
  console.log(editValues);
  const [formValues, setFormValues] = useState({
    airport: "",
    airline: "",
    departure_time: "",
    kids: ""
  });

  useEffect(() => {
    setFormValues(editValues);
  }, []);

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const payload = {
      ...formValues
    };
    withAuth()
      .put(`https://kidsfly-eu.herokuapp.com/trips/${editValues.id}`, payload)
      .then(res => {
        updateTrips({ ...formValues });
        alert("Trip Edited");
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
          value={formValues.airport}
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
          value={formValues.airline}
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
          value={formValues.departure_time}
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
          value={formValues.kids}
          required
        />
      </FormGroup>

      <Button onClick={onSubmit}>Save Trip</Button>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, { updateTrips })(EditTrip);
