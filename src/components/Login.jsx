import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import Navigation from "./header/Navigation";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

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
    axios
      .post("https://kids-fly-backend.herokuapp.com/login", payload)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      });
  };

  return (
    <>
      <Navigation register={true} />
      <Container>
        <Form className="mt-5">
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
          <Button onClick={onSubmit}>Login</Button>
        </Form>
      </Container>
    </>
  );
}
