import React, { useEffect, useRef, useState } from "react";
import { songData } from "../music/songs";
import "../styles/PlayControls.css";

export default function PlayControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(songData);
  const [currentSong, setCurrentSong] = useState(songData[0]);
  const [isMuted,setIsMuted]=useState(false)
  const audioElemet = useRef();
  const changeDurationRef = useRef();
// playing song based on isPlaying
  useEffect(() => {
    if (isPlaying) {
      audioElemet.current.play();
    } else {
      audioElemet.current.pause();
    }
    //mute and un mute
    if(isMuted){
      audioElemet.current.volume=0
    }else{
      audioElemet.current.volume=1
    }
  }, [isPlaying, currentSong]);
//function for opposing the isPlaying state
  const playSong = () => {
    setIsPlaying(!isPlaying);
  };
//next song
  const nextSong = () => {
    const index = songs.findIndex((song) => song.title == currentSong.title);
    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElemet.current.currentTime = 0;
  };
//prev song
  const prevSong = () => {
    const index = songs.findIndex((song) => song.title == currentSong.title);
    if (index == 0){
      setCurrentSong(songs[songs.length - 1]);
    }else{
      setCurrentSong(songs[index - 1]);
    }
    audioElemet.current.currentTime = 0;
  };
// prograssbar
  const setProgressBar = () => {
    const duration = audioElemet.current.duration;
    const currentTime = audioElemet.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
      length: duration,
    });
  };
//change the duration when click on the bar
  const changeDuration = (e) => {
    let width = changeDurationRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;
    audioElemet.current.currentTime = (divProgress / 100) * currentSong.length;
  };
//change isMuted state
const muteUnmuteVolume=()=>{
  setIsMuted(!isMuted)
}
  return (
    <div class="play-controls">
      <div class="function">
        <div class="music">
          <img src={currentSong.image}alt="song"/>
          <div class="details">
            <div class="name">{currentSong.title}</div>
            <div class="artist"></div>
          </div>
        </div>
        {/* player */}
        <div class="playback">
          <audio
            src={currentSong.url}
            ref={audioElemet}
            onTimeUpdate={setProgressBar}
          ></audio>
          <div class="upper">
            <img src="https://cdn-icons-png.flaticon.com/512/3318/3318703.png"
              alt="back"
              onClick={prevSong}
            />
            <img
              onClick={playSong}
              src={
                isPlaying
                  ? "https://cdn-icons-png.flaticon.com/128/709/709691.png"
                  : "https://cdn-icons-png.flaticon.com/128/8029/8029490.png"
              }
              alt="pause"
              class="pause"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/4211/4211386.png"
              alt="forward"
              onClick={nextSong}
            />
          </div>
          <div class="lower">
            <div class="text">
              {audioElemet.current
                ? (audioElemet.current.currentTime / 60).toFixed(2)
                : "0.00"}
            </div>
            <div class="line" onClick={changeDuration} ref={changeDurationRef}>
              <div
                className="track"
                style={{ width: `${currentSong.progress??'0'}%` }}
              ></div>
            </div>
            <div class="text">
              {audioElemet.current
                ?(isNaN((audioElemet.current.duration / 60).toFixed(2))?"0.00":(audioElemet.current.duration / 60).toFixed(2)):"0.00"
                }
            </div>
          </div>
        </div>
        <div class="control">
          <div class="images">
            <img src={isMuted?"https://cdn-icons-png.flaticon.com/128/60/60750.png":"https://cdn-icons-png.flaticon.com/512/25/25695.png"} alt="volume" onClick={muteUnmuteVolume}/>
           <div className="line">
           </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}
