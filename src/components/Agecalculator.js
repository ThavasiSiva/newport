import React, { useState } from 'react'

function Agecalculator() {
    const [dob, setDob]=useState("");
    const [age, setAge]=useState({ years: 0, months: 0, days: 0 });

    const handleInputChange=(e)=>{
        setDob(e.target.value)
    };
    const calculateAge=()=>{
        const birthday= new Date(dob);
        const today= new Date();

        let years=today.getFullYear()-birthday.getFullYear()
        let months=today.getMonth()-birthday.getMonth()
        let days=today.getDate()-birthday.getDate()

        if(days < 0){
            months-=1;
            days+=31;
        }
        if(months < 0){
            years-=1;
            months+=12;
        }
        setAge({years, months, days});
    }


  return (
    <div>
        <h3>Age calculator</h3>
        <label>Enter your DOB:</label>
        <input type='date' onChange={handleInputChange} value={dob}></input><br/>
        <button onClick={calculateAge}>Check your age</button>
        <p>Age: {age.years} years, {age.months} months, {age.days} days</p>
    </div>
  )
}

export default Agecalculator