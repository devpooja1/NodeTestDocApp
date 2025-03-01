import {BrowserRouter ,Routes, Route } from "react-router-dom"
import Layout from "./Layout";
import Login from "./pages/Login";
import DashBorad from "./pages/DashBoard";
import DisplayData from "./pages/PatientDisplay";

import Home from "./pages/Home";
import Registration from "./pages/Register";

const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="home" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Registration/>}/>
    </Route>
    <Route path="dashborad"element={<DashBorad/>}>
    <Route path="displaydata" element={<DisplayData/>}/>
  
    </Route>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}
export default App;