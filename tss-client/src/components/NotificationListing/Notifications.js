import React from "react";

import Notification from "../Notification/Notification";
import "./Notifications.css";
import pawbytesNotificationImg from "../../assets/cafe-shop.jpg";
import parkingSpacesNotificationImg from "../../assets/parking-space.jpg";
import nowHiringNotificationImg from "../../assets/hiring.jpg";
import newPlantsNotificationImg from "../../assets/plants2.jpg";

function Notifications() {
  return (
    <div className="notifications-container">
      <Notification
        heading="More parking spots!"
        imgSrc={parkingSpacesNotificationImg}
        description="We have more parking spaces! No more struggling to find parking."
      />
      <Notification
        heading="New plants are in!"
        imgSrc={newPlantsNotificationImg}
        description="New plants for your home are now here!"
      />
      <Notification
        heading="Join our Twinlande team!"
        imgSrc={nowHiringNotificationImg}
        description="Check out the Careers page and apply!"
      />
      <Notification
        heading="Hello Paw Bytes restaurant!"
        imgSrc={pawbytesNotificationImg}
        description="A mini Paw Bytes restaurant is coming into our stores!"
      />
    </div>
  );
}

export default Notifications;
