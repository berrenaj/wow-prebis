import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../scss/components/_Logo.scss';

export default withRouter((props) => {
  return (
    <h1 className="logo">
      <NavLink to={ { pathname: '/' } }>
        <span>WoW Pre-BiS!</span>
        <small className="emphasis">Best in slot gear for pre-raid characters</small>
      </NavLink>
    </h1>
  );
});