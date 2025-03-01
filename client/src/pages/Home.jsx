import axios from "axios";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const Home=()=>{
    const [mydata, setMydata]=useState([])
    const[input ,setInput]=useState({})
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const loadData=async()=>{
       let api="http://localhost:8000/doctor/displaydoctor";
        // let api="https://testnode-kr7v.onrender.com/doctor/displaydoctor";
        try {
            const response=await axios.get(api)
            setMydata(response.data)
            console.log(response.data)
        } catch (error) {
          console.log(error)  
        }
    }

useState(()=>{
    loadData()
},[])



const ans=mydata.map((key)=>{
    return(
        <>

<Card style={{ width: '18rem' }}>
     <Card.Body>
        <Card.Title>{key.specilization}</Card.Title>
        <Card.Text>
        {key.name}<br/>
        {key.email}<br/>
        {key.city}
        </Card.Text>
        <Button variant="primary" onClick={()=>{handleShow(key._id)}}>Go Appointment</Button>
      </Card.Body>
    </Card>
    
        </>
    )
})




const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}))
   
}

const handleSubmit=async()=>{
//let api="http://localhost:8000/doctor/patient";
let api="https://testnode-kr7v.onrender.com/doctor/patient";
try {
   const response= await axios.post(api, input)
   console.log(response.data)
   alert("Appoemented!!")
} catch (error) {
    console.log(error)
}
}
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap",
          marginLeft:"50px", marginRight:"50px", marginTop:"30px", textAlign:"center"
         }}>
        {ans}   
        </div>
   
        <Modal show={show} onHide={handleClose} style={{padding:"10px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Appoiement Fome</Modal.Title>
        </Modal.Header>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
          <Form.Control id="disabledTextInput"  name="name" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Illness</Form.Label>
          <Form.Control id="disabledTextInput" name="illness" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
          <Form.Control id="disabledTextInput" name="email" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">City</Form.Label>
          <Form.Control id="disabledTextInput"  name="city" onChange={handleInput} />
        </Form.Group>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
      
        </>
    )
}
export default Home;