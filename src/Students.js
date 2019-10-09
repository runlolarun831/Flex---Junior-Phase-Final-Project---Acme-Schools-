import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from './store';
import StudentForm from './Form';

//this is unconnected component
const _Students = ({ students }) => {
  students.map( student => {
    console.log(student.name);
  })
  return (
    <div>
      <StudentForm />
      <h1>hi</h1>
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

//not using
const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: () => {
      dispatch(deleteStudentFromServer());
    }
  };
};

const Students = connect(mapStateToProps, mapDispatchToProps)(_Students);

export default Students;
