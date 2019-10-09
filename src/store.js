import { combineReducers, createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

//constants
const ADD_SCHOOL = 'ADD_SCHOOL';
const SET_SCHOOLS = 'SET_SCHOOLS';
const DELETE_SCHOOL = 'DELETE_SCHOOL';

const ADD_STUDENT = 'ADD_STUDENT';
const SET_STUDENTS = 'SET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';

//reducers
const schoolsReducer = (state = [], action) => {
  if (action.type === SET_SCHOOLS) {
    state = action.schools;
  }
  if (action.type === ADD_SCHOOL) {
    state = [...state, action.school];
  }
  if (action.type === DELETE_SCHOOL) {
    state = state.filter(school => school.id !== action.school.id);
  }
  return state;
};

const studentsReducer = (state = [], action) => {
  if (action.type === SET_STUDENTS) {
    state = action.students;
  }
  if (action.type === ADD_STUDENT) {
    state = [...state, action.student];
  }
  if (action.type === DELETE_STUDENT) {
    state = state.filter(student => student.id !== action.student.id);
  }
  return state;
};


//this is the reducer which changes state in Redux store
const reducer = combineReducers({
  schools: schoolsReducer,
  students: studentsReducer
 });

// this is redux store that holds state
const store = createStore(reducer, applyMiddleware(thunk));

// action creators for School
const setSchools = (schools) => {
  return { type: SET_SCHOOLS, schools };
};
const addSchool = (school) => {
  return { type: ADD_SCHOOL, school };
};
const deleteSchool = (school) => {
  return { type: DELETE_SCHOOL, school };
};

// action creators for Students
const setStudents = (students) => {
  return { type: SET_STUDENTS, students };
};
const addStudent = (student) => {
  return { type: ADD_STUDENT, student };
};
const deleteStudent = (student) => {
  return { type: DELETE_STUDENT, student };
};


// thunks for School
const fetchSchools = () => {
  return async(dispatch) => {
    const schools = (await axios.get('/api/schools')).data;
    dispatch(setSchools(schools));
  };
};
//()carries the data from comp tp thunk
const addSchoolFromServer = (_school) => {
  return async(dispatch) => {
    const school = (await axios.post('/api/schools', _school)).data;
    dispatch(addSchool(school));
  };
};
const deleteSchoolFromServer = () => {
  return async(dispatch) => {
    const school = (await axios.delete('/api/schools')).data;
    dispatch(deleteSchool(school));
  };
};

// thunks for Student
const fetchStudents = () => {
  return async(dispatch) => {
    const students = (await axios.get('/api/students')).data;
    dispatch(setStudents(students));
  };
};
const addStudentFromServer = (_student) => {
  return async(dispatch) => {
    const student = (await axios.post('/api/students', _student)).data;
    dispatch(addStudent(student));
  };
};
const deleteStudentFromServer = () => {
  return async(dispatch) => {
    const student = (await axios.delete('/api/students')).data;
    dispatch(deleteStudent(student));
  };
};

export default store;
export { setSchools, fetchSchools, addSchool, addSchoolFromServer, deleteSchool, deleteSchoolFromServer,  setStudents, fetchStudents, addStudent, addStudentFromServer, deleteStudent, deleteStudentFromServer };
