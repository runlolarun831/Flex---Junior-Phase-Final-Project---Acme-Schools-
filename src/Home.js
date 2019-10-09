import React from 'react';
import { connect } from 'react-redux';
import { addSchoolFromServer } from './store';

//this is an unconnected component
const _Home = ({ schools }) => <div>
  <h1>Home</h1>
  <div>Our most popular school is BLANK with BLANK students.</div>
  <div>Our top performing school is BLANK with an average GPA of 3.5</div>
</div>
;

const mapStateToProps = ({ schools }) => ({ schools });

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
