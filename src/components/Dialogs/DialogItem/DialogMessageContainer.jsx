import {connect} from "react-redux";
import DialogMessage from "./DialogMessage";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../Redux/DialogsReducer";

const mapStateToProps = (state) => {
    return {
        MessagesElement: state.DialogPage.MessageData,
        newMessageText: state.DialogPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        sendMessageCreator: () => {
           dispatch(sendMessageCreator());
        },
        updateNewMessageTextCreator: (text) => {
            let action = updateNewMessageTextCreator(text);
            dispatch(action);
        }

    }
}

const DialogMessageContainer = connect(mapStateToProps,mapDispatchToProps)(DialogMessage);

export default DialogMessageContainer;