import React from "react";
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

export default function Register() {
  return (
    <>
      <Navigation login={true} />
      <Container className="mt-5">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastname">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
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
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="xxxxxxxx"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="airport">Airport</Label>
            <Input
              type="text"
              name="airport"
              id="airport"
              placeholder="Airport"
            />
          </FormGroup>

          <Button>Register</Button>
        </Form>
      </Container>
    </>
  );
}
