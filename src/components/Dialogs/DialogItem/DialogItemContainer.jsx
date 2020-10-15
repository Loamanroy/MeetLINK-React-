import React from "react";
import {connect} from "react-redux";
import DialogItem from "./DialogItem";
import Item from './Item';



const mapStateToProps = (state) => {
    debugger;
    return {
        DialogItem: state.DialogPage.Dialogs,
    }
}

const DialogItemContainer = connect(mapStateToProps)(DialogItem,Item);

export default DialogItemContainer;