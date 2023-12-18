import React from "react";
import "../styles/Song.css";
export default function Song() {
  return (
    <div className="song">
      <div className="top-sec">
        <div className="cover-img">
          <img
            src="https://preview.redd.it/naa1rljlr0g41.jpg?auto=webp&s=daa3fc0fc1c44d18ef5ab8a2de97f9f445e3af05"
            alt=""
          />
        </div>
        <div className="song-details">
          <span>Playlist</span>
          <h1>Hot Hits Hindi</h1>
          <p>Hottest Hindi music served here.Cover-Animal</p>
          <div className="spotify-logo-container">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174872.png"
              alt=""
            />
            <span> Spotify . 1,851,187 likes . 50 songs ,about 3 hr</span>
          </div>
        </div>
      </div>
      <div className="bottom-sec">
        <div className="actions">
          <div>
          <div className="play">
                  <span className="fa fa-xl fa-play" ></span>
                  <span className="fa fa-2xl fa-heart"></span>
            <span className="fa fa-xl fa-ellipsis"></span>
               </div>        
          </div>
          <div className="list-icon">
            <span>List</span>
            <span className="fa  fa-list"></span>
          </div>
        </div>
        {/* table */}
        <div className="table">
          <div className="t-head">
            <div className="title">
              <span>#</span> <span>Title</span>
            </div>
            <div >Album</div>
            <div>Date added</div>
            <div class="fa-regular fa-clock"></div>
          </div>
          {/* tbody */}
          <div className="t-body">
          <div className="song-details">
              <span>10</span> 
              <div className="cover-img">
                <img src="https://preview.redd.it/naa1rljlr0g41.jpg?auto=webp&s=daa3fc0fc1c44d18ef5ab8a2de97f9f445e3af05" alt="" />             
              </div>
              <div>
              <div className="name">Sarkaare</div>
                <div >King</div>
              </div>
            </div>
            <div className="album-name">NEW LIFE</div>
            <div>1 day ago</div>
            <div>2:34</div>
          </div>
        </div>     
      </div>
    </div>
  )}
