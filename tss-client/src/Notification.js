import React from "react";

import "./Notification.css";
import Card from "react-bootstrap/Card";



function Notification({heading, imgSrc, description}) {

    return (
        <Card
            variant="none"
            className="notification" 
        >
            <Card.Img 
                className="notification-img"
                src={imgSrc} 
                alt="Notification image" 
            />
            <Card.ImgOverlay
                className="description-container"
            >
                <Card.Title className="title">{heading}</Card.Title>
                <Card.Text className="description">
                    {description}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Notification;
