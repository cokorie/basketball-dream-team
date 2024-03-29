import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <Link to="/about">About</Link>
      &nbsp; | &nbsp;
      <Link to="/create">Create a Team</Link>
      &nbsp; | &nbsp;
      {/* <Link to="/myteams">View My Teams</Link>
      &nbsp; | &nbsp; */}
      <Link to="/players">View All Players</Link>
      &nbsp; | &nbsp;
      <span>Hello, {props.user.name}!</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}