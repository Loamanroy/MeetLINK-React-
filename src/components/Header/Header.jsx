import React from 'react';
import classes from './Header.module.css';



const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__row}>
                <div className={classes.header__logo}>
                    <span className={classes.header__logo}>{props.logo}</span>
                </div>
                <div className={classes.header__menu}>
                    <ul>
                        <a href="/">
                            <li>{props.menu}</li>
                        </a>
                        <a href="/profile">
                            <li>{props.menu2}</li>
                        </a>
                        <a href="/registration">
                            <li>{props.menu3}</li>
                        </a>
                    </ul>
                </div>
            </div>
        </header>
    );

}

export default Header;