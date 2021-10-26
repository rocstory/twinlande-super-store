import React from "react";

import "./Notification.css";
import Card from "react-bootstrap/Card";

import notificationImg from "./client-header-b.jpg";



function Notification({payload}) {

    return (
        <Card
            variant="none"
            className="notification" 
        >
            <Card.Img 
                className="notification-img"
                src={notificationImg} 
                alt="Notification image" 
            />
            <Card.ImgOverlay
                className="description-container"
            >
                <Card.Title className="title">{payload}</Card.Title>
                <Card.Text className="description">
                    You never really know, but when they know, you'll know. You know?
                </Card.Text>
            </Card.ImgOverlay>
        </Card>




        // <div className="notification">
        //     <div className="img-wrapper">
                
        //     </div>
        //     <div className="description">
        //         <p className="title">{payload}</p>
        //         <p className="brief">This is a notification!</p>
        //     </div>
            

        // </div>
    );
}

export default Notification;
