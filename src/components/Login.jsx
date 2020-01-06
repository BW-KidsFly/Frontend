import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function Login() {
  return (
    <Form>
      
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
      <Button>Login</Button>
    </Form>
  );
}
