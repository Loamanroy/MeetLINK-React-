import React from 'react';
import classes from './Navbar.module.css';
import '../../fonts.css';
import {NavLink} from "react-router-dom";


const Nav = (props) => {

    // const friends = props.friends.map((f) => {
    //         return (
    //                 <ul className={classes.friendlist}>
    //                     <img src={f.src} alt=""/>
    //                     <li className={classes.friendlist__item}>{f.name}</li>
    //                 </ul>
    //         )
    //     }
    // )


        return (
            <div>
                <nav className={classes.nav}>
                    <NavLink to="/profile" className={classes.nav__item}
                             activeClassName={classes.active}>Profile</NavLink>
                    <NavLink to="/dialogs" className={classes.nav__item}
                             activeClassName={classes.active}>Dialogs</NavLink>
                    <NavLink to="/news" className={classes.nav__item} activeClassName={classes.active}>News</NavLink>
                    <NavLink to="/music" className={classes.nav__item} activeClassName={classes.active}>Music</NavLink>
                    <NavLink to="/settings" className={classes.nav__item}
                             activeClassName={classes.active}>Settings</NavLink>
                </nav>
                <div className={classes.friendlist__wrapper}>
                    <p>Closest Friends</p>
                    {/*{friends}*/}
                </div>

            </div>

        );
    }
    export default Nav;
