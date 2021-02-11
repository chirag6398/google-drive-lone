import React from "react";
import "../styles/leftsidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HistoryIcon from "@material-ui/icons/History";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
export default function LeftSidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar__div1">
        <AddIcon />
        <p>New</p>
      </div>
      <div className="sidebar__arrowIcons">
        <div className="sidebar__div">
          <ArrowRightIcon />
          <InsertDriveFileIcon />
          <p>My Drive</p>
        </div>
        <div className="sidebar__div">
          <ArrowRightIcon />
          <ImportantDevicesIcon />
          <p>Compters</p>
        </div>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__div">
          <PeopleAltIcon />
          <p>Shared with me</p>
        </div>
        <div className="sidebar__div">
          <HistoryIcon />
          <p>Recent</p>
        </div>
        <div className="sidebar__div">
          <StarOutlineIcon />
          <p>Starred</p>
        </div>
        <div className="sidebar__div sidebar__bin">
          <DeleteOutlinedIcon />
          <p>Bin</p>
        </div>
        <div className="sidebar__div">
          <StorageOutlinedIcon />
          <p>Storage</p>
        </div>
      </div>
    </div>
  );
}
