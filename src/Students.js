import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from './store';
import StudentForm from './Form';

//this is unconnected component
const _Students = ({ students }) => {
  return (
    <div>
      <StudentForm />
      <ul>
      {
        students.map( student => {
          return (
            <li key={ student.id }>{student.name}</li>
          )
        })
      }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ students }) => ({ students });

//not using delete School yet for testing
const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: () => {
      dispatch(addStudentFromServer());
    }
  };
};

const Students = connect(mapStateToProps, mapDispatchToProps)(_Students);

export default Students;
