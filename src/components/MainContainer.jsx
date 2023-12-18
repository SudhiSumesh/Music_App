import React from "react";
import TopBar from "./TopBar";
import Playlists from "./Playlists";
import "../styles/MainContainer.css";
import Footer from "./Footer";
const MainContainer = ({ setToken, token }) => {
  return (
    <div className="main-container">
      <TopBar setToken={() => setToken} />
      <Playlists token={token} query="billi" />
      <Playlists token={token} query="taylor swift" />
      <Playlists token={token} query="justin biber" />
      <Playlists token={token} query="ed sheeran" />
      <Playlists token={token} query="dualipa" />
      <Playlists token={token} query="madonna" />
      <Playlists token={token} query="rihanna" />
      <Playlists token={token} query="chris brown" />
      <Footer />
    </div>
  );
};
export default MainContainer;
