import React from "react";
import "./Notification.css";


function Notification({payload}) {

    return (
        <div className="notification">
            <div className="img-wrapper">
                
            </div>
            <div className="description">
                <p className="title">{payload}</p>
                <p className="brief">This is a notification!</p>
            </div>
            

        </div>
    );
}

export default Notification;
