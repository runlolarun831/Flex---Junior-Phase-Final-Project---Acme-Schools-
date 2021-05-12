import React from 'react';
import { connect } from 'react-redux';
import { fetchSchools } from './store';
import SchoolForm from './FormSchool';

//this is unconnected component
const _Schools = ({ schools }) => {
  schools.map( school => {
    console.log(school.name);
  })
  return (
    <div>
     <SchoolForm />
      <ul>
      {
        schools.map( school => {
          return (
            <li key={ school.id }>{school.name}  {school.id}</li>
          )
        })
      }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ schools }) => ({ schools });

//not using delete School yet for testing
const mapDispatchToProps = (dispatch) => {
  return {
    deleteSchool: () => {
      dispatch(deleteSchoolFromServer());
    }
  };
};

const Schools = connect(mapStateToProps, mapDispatchToProps)(_Schools);

export default Schools;
