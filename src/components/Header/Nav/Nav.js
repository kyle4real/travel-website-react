import React from "react";
import Button from "../../../UI/Button";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li>
                    <a href="#learnmore" onClick={menuToggle}>
                        Learn More
                    </a>
                </li>
                <li onClick={menuToggle}>
                    <a href="#locations">Locations</a>
                </li>
                <li onClick={menuToggle}>
                    <a href="#pricing">Pricing</a>
                </li>
            </ul>
            <Button className={classes.booknow}>Book Now</Button>
        </nav>
    );
};

export default Nav;
