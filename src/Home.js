import React from 'react';
import { connect } from 'react-redux';
import { addSchoolFromServer } from './store';

//this is an unconnected component
const _Home = ({ schools, students }) => <div>
  <h1>Home</h1>
  <div>Our most popular school is BLANK with BLANK students.{schools.length}</div>
  <div>Our top performing school is BLANK with an average GPA of BLANK{students.length}</div>
</div>
;

//const mapStateToProps = ({ schools }) => ({ schools });
const mapStateToProps = ({ schools, students }) => ({ schools, students });

//don't think I need this not schanging state

const mapDispatchToProps = (dispatch) => {
  return {
    addSchool: () => {
      dispatch(addSchoolFromServer());
    }
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);

export default Home;
