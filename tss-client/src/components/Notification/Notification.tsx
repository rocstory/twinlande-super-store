import React from "react";

import "./Notification.css";
// import Card from "react-bootstrap/Card";
import {Card} from "react-bootstrap";

interface INotification {
    headingTitle: string,
    imgSrc: string,
    description: string
}


const Notification = ({headingTitle, imgSrc, description}: INotification) => {

    return (
        <Card
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
                <Card.Title className="title">{headingTitle}</Card.Title>
                <Card.Text className="description">
                    {description}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Notification;
