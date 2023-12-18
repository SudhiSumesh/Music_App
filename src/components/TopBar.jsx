import React from "react";
import "../styles/TopBar.css";
const TopBar = ({ setToken }) => {
  const LogOut = () => {
    localStorage.removeItem("token");
    setToken("");
    window.location.reload();
  };
  return (
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left "></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">
                <button type="button" className="login-btn">
                  Explore Premium
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="install-btn">
                  <i class="fa-solid fa-arrow-down "></i>
                  <span>Install App</span>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="bell-btn">
    
                  <i class="fa-regular fa-bell"></i>
                </button>
              </a>
            </li>
            <li>
              <a href="#" onClick={LogOut}>
                <button className="user-btn">  
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )}
export default TopBar;
