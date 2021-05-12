import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents, deleteStudentFromServer } from './store';
import StudentForm from './Form';


//this is unconnected component
const _Students = ({ students }) => {
  students.map( student => {
    console.log(student.firstName);
    console.log(student.id);
    console.log(student.id);
  })

//   //making stateful component
// class _Students extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       gpa: ''
//     }
//     this.onSubmit = this.onSubmit.bind(this);
// }

//   onSubmit(ev) {
//     ev.preventDefault();
//     this.props.delete(ev.target.id);
//    }

//   render(){
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
                  <div>{ student.id }</div>
                  <form>
                    <button onClick={() => this.delete(ev.target.id)}>Destroy Student</button>
            </form>
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
//   }
 }

const mapStateToProps = ({ students }) => ({ students });
//not using
const mapDispatchToProps = {
  delete: deleteStudentFromServer
}


const Students = connect(mapStateToProps, mapDispatchToProps)(_Students);

export default Students;
