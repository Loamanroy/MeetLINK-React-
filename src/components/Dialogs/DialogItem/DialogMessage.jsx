import React from "react";
import classes from "../Dialogs.module.css";
import c from "./DialogMessge.module.css";


const DialogMessage = (props) => {
    const MessagesElement = props.MessagesElement.map(m => <p>{m.message}</p>)
    const sendMessage = React.createRef();

    let addMessage = () => {
        props.sendMessageCreator();
    }

    const OnTextChange = () => {
        let text = sendMessage.current.value;
        props.updateNewMessageTextCreator(text);
    }
    return (
        <div className={c.message__wrapper}>
            <div className={classes.message}>
                {MessagesElement}
            </div>
            <div className={c.inputs}>
                <input onChange={OnTextChange}
                       className={c.inputText}
                       value={props.newMessageText}
                       type="text"
                       ref={sendMessage}/>

                <input className={c.inputSubmit} type="submit" onClick={addMessage}/>
            </div>
        </div>
    );
}

export default DialogMessage;