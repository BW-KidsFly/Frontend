import React, { useState, useEffect } from "react";
import withAuth from "../../helpers/axios";
import Navigation from "../header/Navigation";

export default function Users() {
  const [regUsers, setRegUsers] = useState([]);

  useEffect(() => {
    withAuth()
      .get("https://kids-fly-backend.herokuapp.com/users")
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
        {/* {
            regUsers.map(user => {
                return (
                    <>
                    {user.first_name}
                    </>
                )
            })
        } */}
    </>
  );
}
