import React from 'react';
import { connect } from 'react-redux';
import { addStudentFromServer } from './store';

class StudentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //working on this it submits empty values to database
  onChange(ev) {
    console.log([ev.target.name]);
    console.log([ev.target.value]);
    this.setState({
      //[ev.target.name]: ev.target.value
       ev.target.name: ev.target.value,

    })
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.create(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gpa: ''
    }); //clears input
  }

  //name attr. must be same as corres. state
  render(){
    return (
      <form id='student'>
        <p>First Name
          <input id='firstName' name='firstName' value={ this.state.firstName } onChange={ this.onChange } />
        </p>
        <p>Last Name
          <input id='lastName' name='lastName' value={this.state.lastName } onChange={ this.onChange } />
        </p>
        <p>Email
          <input id='email' name='email' value={this.state.email } onChange={ this.onChange } />
        </p>
        <p>GPA
          <input id='gpa' name='gpa' value={this.state.gpa } onChange={ this.onChange } />
        </p>
        <button onClick={ this.onSubmit }>Save</button><br></br>
      </form>
    )
  }
}
// don't have explicitly pass args this way
//mTd and mTs wraps the component now avail inside comp. as this.props on class comps and just props in stateless comps
const mapToDispatch = {
  create: addStudentFromServer
}
//null because not using mapToState and connect() needs 2 args.
export default connect( null, mapToDispatch)(StudentForm);

