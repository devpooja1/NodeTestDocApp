import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const DashBorad=()=>{
const navigate=useNavigate()

const Logout=()=>{
  localStorage.clear()
  navigate("/login")
}

    return(
        <>
      <div style={{width:"100%", backgroundColor:"lightblue", height:"40", textAlign:"center"}}>
        <h4>WelCome to Dashboard </h4>Name : {localStorage.getItem("username")}  Email: {localStorage.getItem("email")}</div> 
      <div style={{display:"flex"}}>
        <div style={{width:"15%",textDecoration:"none",listStyle:"none", backgroundColor:"lightblue", height:"100vh", color:"black", paddingTop:"50px"}}>
<ul style={{listStyle:"none", textDecoration:"none"}}>
    <li ><Nav.Link as={Link} to="displaydata">Display Patient</Nav.Link></li><br/>
    
    <li> <Button onClick={Logout}>Logout</Button></li><br/><br/>
</ul>

        </div>
        <div style={{width:"80%", height:"100vh",textAlign:"center"}}>
        <Outlet/>
        </div>
    
        </div> 
        </>
    )
}
export default DashBorad
