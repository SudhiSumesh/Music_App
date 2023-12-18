import React from "react";
import "../styles/Item.css";
export default function Item({ song }) {
  return (
    <div className="item">
      <img
        src={
          song.images.length
            ? song.images[2].url
            : "https://www.hypebot.com/wp-content/uploads/2020/10/spotify-1759471_1280.jpg"
        }
        alt="song"
      />
      <div className="play">
        <span className="fa fa-play"></span>
      </div>
      <h4>{song.name}</h4>
      <p>Relax and indulge with beautiful piano pieces</p>
    </div>
  );
}
