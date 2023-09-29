import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import { useState } from 'react';

const App = ()=>{

  const[name,setName]= useState("");

  const[fName,fullName]= useState("");
  
  const[lastName,setLastName]= useState("");
  
  const[fLastName,fSetLastName] = useState("");

  const userInput1= (input)=>
  {
    console.log(input.target.value);  //  inside inspect
    setName(input.target.value)
  }

  
  const userInput2 = (input)=>
  {
    setLastName(input.target.value);
  }

  const onSubmit= (event)=>
  {
    event.preventDefault();
    fullName(name);
    fSetLastName(lastName);
  }
  return(
    <>
      <div>
        <form onClick={onSubmit}>
        <h1>Hello  {fName} {fLastName}</h1>
        <input type='text' placeholder='Enter first name'    // step-1
                onChange={userInput1}
                value={name} />
        <br/>
        <input type='text' placeholder='Enter last name'    // step-1
                onChange={userInput2}
                value={lastName} />
        <br/>                               
        <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </>
  )
}

export default App;

