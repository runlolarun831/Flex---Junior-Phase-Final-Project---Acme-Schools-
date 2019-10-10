import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents, deleteStudentFromServer } from './store';
import StudentForm from './Form';


this is unconnected component
const _Students = ({ students }) => {
  students.map( student => {
    console.log(student.firstName);
  })
// class _Students extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       gpa: ''
//     }
//     this.deleteStudent = not done
// }

  return (
    <div>
      <StudentForm />
      <h1>hi</h1>
      <ul>
      {
        students.map( student => {
          return (
            <li key={ student.id }>
              <div>
                <div> { student.firstName }  { student.lastName }</div>
                <div>{ student.gpa }</div>
                {/*<form></form> */}
                <button onClick={this.student.id}>Destroy Student</button>
              </div>

            </li>
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
