import React from "react";
import "../styles/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Avatar, Icon, IconButton } from "@material-ui/core";
export default function header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png"
            alt="..."
          />
          <span>Drive</span>
        </div>
        <div className="header__searchBox">
          <div className="header__serchContiner">
            <SearchIcon />
            <input type="text" placeholder="search" />
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="header__righticons">
          <div>
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
          <span>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <Avatar />
            </IconButton>
          </span>
        </div>
      </div>
    </div>
  );
}
