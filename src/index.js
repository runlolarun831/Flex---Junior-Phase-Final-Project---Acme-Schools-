import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { HashRouter, Link, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Schools from './Schools';

import store, { fetchSchools } from './store';

//connected components get rendered
class App extends React.Component{
  async componentDidMount(){
    store.dispatch(fetchSchools())
  }
  render(){
    return (
      <Provider store={ store }>
        <HashRouter>
          <Route component={ Nav } />
          <Route path='/' component={ Home } exact />
          <Route path='/schools' component={ Schools } />
        </HashRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
//ReactDOM.render(<hr />, document.querySelector('#root'));
