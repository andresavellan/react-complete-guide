import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit =(props) => {
  const toggleBtnRef = useRef(null); 
  const authContext = useContext(AuthContext)
  
  useEffect(() => {
      console.log('[Cockpit] useEffect'); 
      console.log('[Cockpit] AuthContext', authContext.authenticated); 
      toggleBtnRef.current.click(); 



    }, []); 
  
  const assignedClasses =[];
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }
  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>this is really working</p>
      <button 
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        <button onClick={authContext.login}>Log In</button>
    </div>
  ); 
}

export default cockpit; 