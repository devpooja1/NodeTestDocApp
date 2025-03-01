import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const [email , setEmail]=useState("")
    const[password, setPassword]=useState("")
 const navigate=useNavigate()

    const handleSubmit=async()=>{
        // let api="http://localhost:8000/doctor/login";
        let api="https://nodetestdocapp.onrender.com/doctor/login";
        try {
           const response= await axios.post(api, {email:email, password:password})
           console.log(response.data)
          localStorage.setItem("userid" , response.data._id)
          localStorage.setItem("username" , response.data.name)
          localStorage.setItem("email" , response.data.email)
           alert("Successfully Login")
navigate("/dashborad")
        } catch (error) {
           alert(error.response.data.msg)
        }
    }

    return(
        <>
       
        <div style={{width:"40%",margin:"auto"}}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
          <Form.Control type='text' placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
          <Form.Control type='password' placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </Form.Group>

        <Button onClick={handleSubmit}>Submit</Button>
        </div>
       
        </>
    )
}
export default Login;