import React, { Component } from 'react'; 
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass'; 
import PropTypes from 'prop-types'; 
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext; 
  componentDidMount() {
    this.inputElementRef.current.focus(); 
    console.log('AuthContext', this.context.authenticated)
  }

  
  
  render () {
  console.log('[Person.js] rendering...'); 
    return (
      <Aux>
          {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
      
      <p onClick={this.props.click}>Im {this.props.name} and Im {this.props.age} years old</p>
      <p>{this.props.children}</p>
      <input 
      //ref={(inputEl) => {this.inputElement = inputEl}}
      ref={this.inputElementRef}
      type="text" 
      onChange={this.props.changed} 
      value={this.props.name}/>
    </Aux>
    ); 
  };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func

};

export default withClass(Person, classes.Person); 