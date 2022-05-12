import React from "react";
import "./HomePage.css";
import Notifications from "../../components/NotificationListing/Notifications";

function HomePage() {
    return (
        <div className="home-page">
            <Notifications />
            <div className="side-bar">
                <span>?</span>
            </div>
        </div>
    );
}

export default HomePage;
