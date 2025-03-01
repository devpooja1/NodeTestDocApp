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
      <option value="cardiologist">Cardiologist </option>
      <option value="neurologist"> Gynecologist</option>
      <option value="surgeon">Surgeon</option>
      <option value="pediatrician">Dermatologist </option>
      <option value="gynecologist"> Neurologist</option>
      <option value="dermatologist">Pediatrician </option>
      <option value="ent"> ENT Specialist</option>
      <option value="dentist">Dentist</option>
      
      
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