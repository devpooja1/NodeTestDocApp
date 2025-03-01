import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const Registration=()=>{
    const[input ,setInput]=useState({})

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
       
    }

    const handleSubmit=async()=>{
// let api="http://localhost:8000/doctor/signin";
    let api="https://nodetestdocapp.onrender.com/doctor/signin";
    try {
       const response= await axios.post(api, input)
       console.log(response.data)
       alert("Successfully SignUp")
    } catch (error) {
        console.log(error)
    }
}

    return(
        <>
        
        <div style={{width:"40%", margin:"auto"}}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Enter Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Enter Name" name="name" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Select  name="specilist" onChange={handleInput} >
      <option> Doctor Specializations</option>
      <option value="physician">General Physician</option>
      <option value="cardiologist">Cardiologist </option>
      <option value="neurologist"> Neurologist</option>
      <option value="surgeon">  Orthopedic Surgeon</option>
      <option value="pediatrician"> Pediatrician</option>
      <option value="gynecologist"> Gynecologist</option>
      <option value="dermatologist"> Dermatologist</option>
      <option value="ent"> ENT Specialist</option>
      <option value="dentist">  Dentist</option>
      <option value="nephrologist"> Nephrologist</option>
      
    </Form.Select>
    </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Email" name="email" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">City</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="City" name="city" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="password" name="password" onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3">
         <Button onClick={handleSubmit}>Submit</Button>
         </Form.Group>

         </div>
      
       
       
        </>
    )
}
export default Registration;