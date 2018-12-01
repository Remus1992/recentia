import React from 'react';
import classes from "./Profile.css";
import doctorAvatar from "../../assests/images/LLH-Doctors-Male-Avatar-300x300.png";

const profile = () => (
    <div className={classes.profile}>
        <img className={classes.profile_pic} src={doctorAvatar} alt="Avatar"/>
        <p>Brian Martin, M.D.</p>
    </div>
);

export default profile;