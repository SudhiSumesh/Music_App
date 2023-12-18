import React from 'react'
import TopSideBar from './TopSideBar'
import BottomSideBar from './BottomSideBar'
const SideBar = (token) => {
  return (
    <>
      <TopSideBar />
      <BottomSideBar token={token}/>
    </>
  )
}

export default SideBar
