import React from 'react'
import MainContainer from '../components/MainContainer'
import SideBar from '../components/SideBar'
import PlayControls from '../components/PlayControls'
import '../index.css'
const Home = ({setToken,token}) => {
  return (
    <>
   <SideBar token={token} />
    <MainContainer setToken={()=>setToken} token={token}/>
    <PlayControls/>
    </>
  )}
export default Home
