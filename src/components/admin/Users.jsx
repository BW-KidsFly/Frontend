import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import Navigation from "../header/Navigation";
import { Card, CardText, CardBody, Container, Button } from "reactstrap";

export default function Users() {
  const [regUsers, setRegUsers] = useState([]);

  useEffect(() => {
    withAuth()
      .get("https://kidsfly-eu.herokuapp.com/users")
      .then(res => {
        setRegUsers(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  const delUser = id => {
    withAuth()
      .delete(`https://kidsfly-eu.herokuapp.com/users/${id}`)
      .then(res => {
        alert("User Deleted");
        setRegUsers(regUsers.filter(user => user.id !== id));
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <>
      <Navigation logout={true} trips={true} />
      <Container>
        <h2 className="text-center mt-2">Registered Users</h2>
        {regUsers.map(user => {
          return (
            <Card key={user.id} className="mt-3">
              <CardBody>
                <CardText>
                  Full Name: {user.first_name} {user.last_name}
                </CardText>
                <CardText>Email: {user.email}</CardText>
                <CardText>Airport: {user.airport}</CardText>
                <Button
                  color="danger"
                  onClick={event => {
                    event.preventDefault();
                    delUser(user.id);
                  }}
                >
                  Delete User
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
