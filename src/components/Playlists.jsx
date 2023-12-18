import React, { useEffect, useState } from "react";
import "../styles/Playlists.css";
import Item from "./Item";
import { Link } from "react-router-dom";
import axios from "axios";
const Playlists = ({ token, query }) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          type: "artist",
        },
      })
      .then((res) => {
        const data = res.data.artists.items;
        setSongs(data);
        console.log(songs);
      })
      .catch((err) => {
        console.log("error is", err);
      });
  }, []);
  return (
    <div className="spotify-playlist">
      <h2>spotify-playlist</h2>
      <div className="list">
        {songs.map(
          (song, index) =>
            index < 5 && (
              <Link to="/individualsong">
                <Item song={song} key={song.id} />
              </Link>
            ))}
      </div>
    </div>
  );
};
export default Playlists;
