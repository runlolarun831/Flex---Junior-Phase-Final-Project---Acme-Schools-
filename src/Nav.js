import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


//this is an unconnected component

const _Nav = ({ schools, students, location }) => {
  return (
    <nav>
      <h2>Acme Schools</h2>
      <Link to='/schools'>Schools ({ schools.length })</Link>
      <Link to='/students'>Students ({ students.length })</Link>
    </nav>
  );
};

// connect comps.

const Nav = connect(({schools, students}) => {
  return {
    schools: schools,
    students: students
    //people: state.people //video#1
    //count: state.people.length //video#2(a)massaging the state
    //count: schools.length
  }
})(_Nav);

export default Nav;
