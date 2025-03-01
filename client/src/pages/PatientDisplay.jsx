import axios from "axios";
import { useState } from "react"
import Table from 'react-bootstrap/Table';


const DisplayData=()=>{
    const [mydata, setMydata]=useState([])

    const loadData=async()=>{
        // let api="http://localhost:8000/doctor/displaydata";
        let api="https://nodetestdocapp.onrender.com/doctor/displaydata";
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
       <tr>
        <td>{key.name}</td>
        <td>{key.email}</td>
        <td>{key.city}</td>
        <td>{key.illness}</td>
         </tr> 
        
        </>
    )
})

    return(
        <>
      <center style={{marginLeft:"60px"}}>
        <h1>Display Data</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
         <th> Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Concern</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </center>  
        </>
    )
}
export default DisplayData
