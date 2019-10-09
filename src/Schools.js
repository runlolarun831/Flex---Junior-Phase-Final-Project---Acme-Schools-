import React from 'react';
import { connect } from 'react-redux';
import { fetchSchools } from './store';
import StudentForm from './Form';

//this is unconnected component
const _Schools = ({ schools }) => {
  return (
    <div>
      <StudentForm />
      <ul>
      {
        schools.map( school => {
          return (
            <li key={ school.id }>{school.name}</li>
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
