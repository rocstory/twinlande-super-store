import React from "react";

import Notification from "./Notification";
import "./Notifications.css";



function Notifications() {
    const notifications = ["Notification A", "Notification B", "Notification C", "Notification D"]; 
    return (
        <div className="notifications-container">
            {
                notifications.map(notification => <Notification key={notification} payload={notification} />)
            }
        </div>
    );
}

export default Notifications;
