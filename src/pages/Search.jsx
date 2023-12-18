import React from "react";
import SideBar from "../components/SideBar";
import PlayControls from "../components/PlayControls";
import SearchBar from "../components/SearchBar";
export default function Search({ token,setToken }) {
  return (
    <>
      <SideBar />
      <SearchBar token={token} setToken={setToken}  />
      <PlayControls />
    </>
  );
}
