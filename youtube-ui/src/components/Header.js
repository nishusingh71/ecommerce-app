import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
          
          className="header_logo"
        />
      </div>
      <div className="header_input">
        <div className="header_middle">
          <input className="searchInput" placeholder="Search" type="text" />
          <SearchIcon className="header_searchBtn" />
        </div>
        <MicIcon />
      </div>
      <div className="header_right">
        <VideoCallIcon className="header_icons" />
        <NotificationsIcon className="header_icons" />
        <AccountCircleIcon className="header_icons" />
      </div>
    </div>
  );
};

export default Header;
