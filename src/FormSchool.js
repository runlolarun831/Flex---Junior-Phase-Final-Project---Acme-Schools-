import React from 'react';
import { connect } from 'react-redux';
import { addSchoolFromServer } from './store';

class SchoolForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    this.setState({
      name: ev.target.value
    })
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.create(this.state);
    this.setState({ name: ''}); //clears input
  }

  //name attr. must be same as corres. state
  render(){
    return (
      <form id='student'>
        <input name='name' value={this.state.name } onChange={ this.onChange } />
        <button onClick={ this.onSubmit }>Change</button>
      </form>
    )

  }
}
// don't have explicitly pass args this way
//mTd and mTs wraps the component now avail inside comp. as this.props on class comps and just props in stateless comps
const mapToDispatch = {
  create: addSchoolFromServer
}
//null because not using mapToState and connect() needs 2 args.
export default connect( null, mapToDispatch)(SchoolForm);

