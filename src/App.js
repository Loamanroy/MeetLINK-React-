import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from "./components/Profile/Profile";
import './fonts.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = () => {
    return (
        <div className={classes.app__wrapper}>
            <Header menu={"Home"} menu2={"Profile"} menu3={"Registration"} logo={"MeetLINK"}/>
                <Nav />
            <div className={classes.app__wrapper__content}>
                <Route path={"/profile"} render={() => <Profile/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/settings"} component={Settings}/>
            </div>
        </div>);

}

export default App;