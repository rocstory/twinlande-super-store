import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import "./ProfileTrigger.css";


function ProfileTrigger() {

    return (

        <Nav.Item className="user-option profile">
            <div className="uo-icon-wrapper profile-wrapper">
                <span className="uo-icon">
                    <FontAwesomeIcon icon={['fas', 'user-alt']} />
                </span>
            </div>

            <div className="uo-label-wrapper">
                <span className="uo-label profile-label">Profile</span>
            </div>
        </Nav.Item>
    );
}

export default ProfileTrigger;
