import React from "react";

import Notification from "../Notification/Notification";
import "./Notifications.css";
import pawbytesNotificationImg from "../../assets/images/notifications/cafe-shop.jpg";
import parkingSpacesNotificationImg from "../../assets/images/notifications/parking-space.jpg";
import nowHiringNotificationImg from "../../assets/images/notifications/hiring.jpg";
import newPlantsNotificationImg from "../../assets/images/notifications/plants2.jpg";

function Notifications() {
  return (
    <div className="notifications-container">
      <Notification
        headingTitle="More parking spots!"
        imgSrc={parkingSpacesNotificationImg}
        description="We have more parking spaces! No more struggling to find parking."
      />
      <Notification
        headingTitle="New plants are in!"
        imgSrc={newPlantsNotificationImg}
        description="New plants for your home are now here!"
      />
      <Notification
        headingTitle="Join our Twinlande team!"
        imgSrc={nowHiringNotificationImg}
        description="Check out the Careers page and apply!"
      />
      <Notification
        headingTitle="Hello Paw Bytes restaurant!"
        imgSrc={pawbytesNotificationImg}
        description="A mini Paw Bytes restaurant is coming into our stores!"
      />
    </div>
  );
}

export default Notifications;
