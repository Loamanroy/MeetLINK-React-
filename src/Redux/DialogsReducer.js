const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_DIALOG_TEXT = "CHANGE_NEW_DIALOG_TEXT";

let initializeState = {
        Dialogs: [
            {id: 1, firstname: "Timur Tochiev"},
            {id: 2, firstname: "Khanze"},
            {id: 3, firstname: "Tularov Arbi"},
            {id: 4, firstname: "Tochiev Maga"},
            {id: 5, firstname: "Shazhaev Islam"},
            {id: 6, firstname: "Ibragimov Ruslan"}
        ],
        MessageData:
            [

            ],
        newMessageText: "",
    }




 const DialogsReducer = (state = initializeState, action) => {



    switch (action.type) {
        case ADD_MESSAGE: {
            return  {
                ...state,
                MessageData: [{id: 7, message: state.newMessageText},...state.MessageData],
                newMessageText: "",
            };
        }
        case CHANGE_NEW_DIALOG_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            };
        }
        default:
            return state;
    }
}

export const updateNewMessageTextCreator = (newText) => ({type: CHANGE_NEW_DIALOG_TEXT, newText: newText});
export const sendMessageCreator = () => ({type: ADD_MESSAGE});

export default DialogsReducer;