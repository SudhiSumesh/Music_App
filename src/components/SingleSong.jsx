import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'
import Song from './Song'
import '../styles/MainContainer.css'
export default function SingleSong({token}) {
  return (
    <div className='main-container'>
      <TopBar token={token}/>
      <Song/>
      <Footer/>
    </div>
  )
}
