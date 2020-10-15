import React from "react";
import classes from "./Info.module.css";

const Info = (props) => {
    return (
        <div className={classes.profile__desc}>
            <div className={classes.img}>
                <img src={props.src}/>
            </div>
            <div className={classes.description}>
                <p className={classes.profile__name}>{props.name}</p>
                <p className={classes.profile__dob}>Date of birth: {props.dob}</p>
                <p className={classes.profile__edu}>Education: {props.edu}</p>
                <p className={classes.profile__website}>Personal Website: {props.pw}</p>
            </div>
        </div>
    )
}

export default Info;