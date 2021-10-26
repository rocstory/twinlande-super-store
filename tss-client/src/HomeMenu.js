import React from "react";
import "./HomeMenu.css";
import Notifications from "./Notifications";


function HomeMenu() {
    
    return (
        <div className="home-menu">
            <Notifications/>
            <div className="home-ad">
                <span>?</span>
            </div>
        </div>
    );
}

export default HomeMenu;
