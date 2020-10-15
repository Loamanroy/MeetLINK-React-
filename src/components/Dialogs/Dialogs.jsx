import React from "react";
import classes from './Dialogs.module.css'
import DialogMessageContainer from "./DialogItem/DialogMessageContainer";
import DialogItemContainer from "./DialogItem/DialogItemContainer";

const Dialogs = () => {
    return (
        <div className={classes.wrapper}>
            <DialogMessageContainer/>
            <DialogItemContainer/>
        </div>
    );
}
export default Dialogs;