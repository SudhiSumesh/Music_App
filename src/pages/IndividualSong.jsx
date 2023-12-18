import React from 'react'
import SideBar from '../components/SideBar'
import SingleSong from '../components/SingleSong'
import PlayControls from '../components/PlayControls'
import '../index.css'
export default function IndividualSong({token}) {
  const IndividualpageSong=()=>{

  }
  return (
    <>
       <SideBar/>
    <SingleSong token={token}/>
    <PlayControls IndividualpageSong={IndividualpageSong}/>
    </>
  )
}
