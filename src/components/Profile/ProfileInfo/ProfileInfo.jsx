import React from "react";
import classes from "./ProfileInfo.module.css";
import Info from "./info/Info";

const ProfileInfo = (props) => {

    const profiles = props.MainProfile.map(p => <Info
        src={p.src}
        name={p.name}
        dob={p.dob}
        edu={p.edu}
        pw={p.pw}
    />)

    return (
        <div className={classes.content}>
            <div>
                <img src="https://s.inyourpocket.com/img/background/9496-1366x300.jpg"/>
            </div>
            <div className={classes.profile__row}>
                {profiles}
            </div>
        </div>

    );
}

export default ProfileInfo;