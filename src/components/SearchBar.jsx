import React, { useState } from "react";
import "../styles/SearchBar.css";
import TopBar from "./TopBar";
import Artist from "./Artist";
import axios from "axios";
export default function SearchBar({ token ,setToken}) {
  const [searchInput, setSearchInput] = useState("");
  const [songs,setSongs]=useState([])
  const searchSong = () => {
    //getdata from api
      axios
        .get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            query: searchInput,
            type: "artist",
          },
        })
        .then((res) => {
             const data=res.data.artists.items
            setSongs(data)
        })
        .catch((err) => {
          console.log("error is", err);
        });
        setSearchInput("");
  };
  return (
    <div className="search-bar">
        <TopBar setToken={setToken} />
      <div className="search-field">
        <input
          type="text"
          name=""
          placeholder="search your favourite singer"
          value={searchInput}
          id=""
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchSong}>search</button>
      </div>
      <div className="items">
        {
            songs.map((song)=>(
                <Artist song={song} key={song.id}/>
            ))}
      </div>
    </div>
  );
}
