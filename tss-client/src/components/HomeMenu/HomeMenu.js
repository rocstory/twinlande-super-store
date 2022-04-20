import React from "react";
import "./HomeMenu.css";
import Notifications from "../NotificationListing/Notifications";

function HomeMenu() {
  return (
    <div className="home-menu">
      <Notifications />
      <div className="side-bar">
        <span>?</span>
      </div>
    </div>
  );
}

export default HomeMenu;
