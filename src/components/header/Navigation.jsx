import React from "react";

export default function Navigation(props) {
  const { login, register, logout, trips } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <a className="navbar-brand" href="#">
        Kids Fly
      </a>
      <ul className="navbar-nav">
        {login ? <li className="nav-item">Login</li> : null}
        {register ? <li className="nav-item">Register</li> : null}
        {trips ? <li className="nav-item">Trips</li> : null}
        {logout ? <li className="nav-item">Logout</li> : null}
      </ul>
    </nav>
  );
}
