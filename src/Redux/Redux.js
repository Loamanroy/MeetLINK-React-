import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import FriendsReducer from "./FriendsReducer";



let reducers = combineReducers({
    ProfileData: ProfileReducer,
    DialogPage: DialogsReducer,
    FriendsPage: FriendsReducer,
});

let store = createStore(reducers);



export default store;