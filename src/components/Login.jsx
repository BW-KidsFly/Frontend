import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import Navigation from "./header/Navigation";

export default function Login(props) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(formValues);
    const payload = {
      email: formValues.email,
      password: formValues.password
    };

    axios
      .post("https://kidsfly-eu.herokuapp.com/login", payload)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        const landingUrl =
          res.data.is_admin === true ? "/admin/users" : "/traveller";
        props.history.push(landingUrl);
      })
      .catch(err => {
        alert(err.message);
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
