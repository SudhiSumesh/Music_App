import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BottomSideBar.css";
const BottomSideBar = (token) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    // get data from api
    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization:`Bearer ${token}`,
        },
        params: {
          query: "su",
          type: "artist",
        },
      })
      .then((res) => {
        const data = res.data.artists.items;
        setSongs(data);
      })
      .catch((err) => {
        console.log("error is", err);
      });
  }, []);
  return (
    <>
      <div className="bottom-sidebar">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <i class="fa-solid fa-lines-leaning"></i>
                <span> Your Library</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-add"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* buttonz */}
        <div className="play-art-btns">
          <button>Playlists</button>
          <button>Artists</button>
        </div>
        {/* bottom sec */}
        <div className="artist-sec-main">
          <div className="artist-sec">
            {/* artists */}
            {songs.map((song) => (
              <div className="single-artists-sec" key={song.id}>
                <div className="cover-img">
                <img src={song.images.length?song.images[2].url:"https://www.hypebot.com/wp-content/uploads/2020/10/spotify-1759471_1280.jpg"} alt="song"/>
                </div>
                <div className="details">
                  <div className="name">{song.name}</div>
                  <div>Artist</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BottomSideBar;
