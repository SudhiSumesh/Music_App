import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import IndividualSong from "./pages/IndividualSong";
import Home from './pages/Home'
import Login from './pages/Login'
import Search from "./pages/Search";
import SignUp from './pages/SignUp'

function App() {
  //credentials
  const  CLIENT_ID=import.meta.env.VITE_CLIENT_ID;
  const  REDIRECT_URI=import.meta.env.VITE_REDIRECT_URI;
  const  AUTH_ENDPOINT=import.meta.env.VITE_AUTH_ENDPOINT;
  const  RESPONSE_TYPE=import.meta.env.VITE_RESPONSE_TYPE;
   const URL=`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
  
   const [token,setToken]=useState('')
   useEffect(()=>{
    // set token
     const hash=window.location.hash
     let token =window.localStorage.getItem('token')
     if(!token && hash){
      token=hash.substring(1).split("&").find(item=>item.startsWith('access_token')).split('=')[1]
      window.location.hash=''
      window.localStorage.setItem("token",token)
    }
    setToken(token)
       },[]);
  return (
    <>
     <Router>
        <Routes>
          <Route  path="/" element={token?<Home setToken={setToken} token={token}/>:<Login url={URL}/>}/>
         <Route path='search' element={token?<Search token={token} setToken={setToken} />:<Login url={URL}/>}/>
          <Route  path="/individualsong" element={<IndividualSong token={token}/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
     </Router>
    </>
  );
}
export default App;
