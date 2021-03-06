import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { HashRouter, Link, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Schools from './Schools';
import Students from './Students';
import store, { fetchSchools, fetchStudents} from './store';

//connected components get rendered
class App extends React.Component{
  async componentDidMount(){
    store.dispatch(fetchSchools())
    store.dispatch(fetchStudents())
  }
  render(){
    return (
      <Provider store={ store }>
        <HashRouter>
          <Route component={ Nav } />
          <Route path='/' component={ Home } exact />
          <Route path='/schools' component={ Schools } />
          <Route path='/students' component={ Students } />
        </HashRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));
//ReactDOM.render(<hr />, document.querySelector('#root'));
