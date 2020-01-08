import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Navigation from "./header/Navigation";
import axios from "axios";

export default function Register(props) {
  const [formValues, setFormValues] = useState({});

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const payload = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      password: formValues.password,
      phone: formValues.phone,
      airport: formValues.airport,
      is_admin: formValues.admin_code === 12345 ? 1 : 0
    };

    const onboardUrl =
      payload.is_admin === 1 ? "/onboard/admin" : "/onboard/user";

    axios
      .post("https://kids-fly-backend.herokuapp.com/users", payload)
      .then(res => {
        props.history.push(onboardUrl);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <>
      <Navigation login={true} />
      <Container className="mt-5">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </FormGroup>
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
            <Label for="admin_code">Admin Code</Label>
            <Input
              type="number"
              name="admin_code"
              id="admin_code"
              placeholder="Admin Code"
              onChange={handleChange}
            />
          </FormGroup>

          <Button onClick={onSubmit}>Register</Button>
        </Form>
      </Container>
    </>
  );
}
