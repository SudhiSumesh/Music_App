import React from "react";
import { Link } from "react-router-dom";
import "../styles/TopSideBar.css";
const TopSideBar = () => {
  return (
      <div className="sidebar">
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">          
                <i className="fa fa-home"></i>
                <span> Home</span>
              </Link>
            </li>
            <li>
              <Link to='/search'>              
                <i className="fa fa-search"></i>
                <span> Search</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};
export default TopSideBar;
