import { combineReducers, createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

//constants
const ADD_SCHOOL = 'ADD_SCHOOL';
const SET_SCHOOL = 'SET_SCHOOL';


const schoolReducer = (state = [], action) => {
  if (action.type === SET_SCHOOLS) {
    state = action.schools;
  }
  if (action.type === ADD_SCHOOL) {
    state = [...action, action.school];
  }
  if (action.type === DELETE_SCHOOL) {
    state = state.filter(school => school.id !== action.school.id);
  }
  return state;
};


//this is the reducer which changes state in Redux store
const reducer = combineReducers({
  school: schoolReducer
 });

// this is redux store that holds state
const store = createStore(reducer, applyMiddleware(thunk));

// action creators
const setSchools = (schools) => {
  return { type: SET_SCHOOLS, schools };
};
const addSchool = (school) => {
  return { type: ADD_SCHOOL, school };
};
const deleteSchool = (school) => {
  return { type: DELETE_SCHOOL, school };
};

// thunks
const fetchSchools = () => {
  return async(dispatch) => {
    const schools = (await axios.get('/api/schools')).data;
    dispatch(setSchools(schools));
  };
};
const addSchoolFromServer = () => {
  return async(dispatch) => {
    const school = (await axios.post('/api/schools')).data;
    dispatch(addSchool(school));
  };
};
const deleteSchoolFromSever = => {
  return async(dispatch) => {

  }
}



export default store;
export { fetchSchools };
