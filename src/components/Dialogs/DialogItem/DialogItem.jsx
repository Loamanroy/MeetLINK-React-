import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import Item from "./Item";


const DialogItem = (props) => {

        const Names = props.DialogItem.map(N => <Item
            firstname={N.firstname}
        />);
    return (
        <div className={classes.dialog}>
            <img className={classes.dialog__avatar} src="" alt=""/>
            <NavLink to={"/dialogs/" + props.DialogItemId} activeClassName={classes.active}>{props.DialogItemName}</NavLink>
            {Names}
        </div>
    );
}
export default DialogItem;