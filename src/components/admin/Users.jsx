import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import Navigation from "../header/Navigation";

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

  return (
    <>
      <Navigation logout={true} trips={true} />
      <h2 className="text-center mt-2">Registered Users</h2>
      {regUsers.map(user => {
        return <h2>{user.first_name}</h2>;
      })}
    </>
  );
}
