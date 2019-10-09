import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


//this is an unconnected component

const _Nav = ({ location }) => {
  return (
    <nav>
      <Link to='/schools'>Schools </Link>
    </nav>
  );
};

//new way to connect comps.
//replaced state w/ {people}
const Nav = connect(({schools}) => {
  return {
    schools: schools
    //people: state.people //video#1
    //count: state.people.length //video#2(a)massaging the state
    //count: schools.length
  }
})(_Nav);

export default Nav;
