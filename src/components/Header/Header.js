import React from "react";
import classes from "./Header.module.scss";
import LeafSVG from "../../assets/LeafSVG.js";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__logo}>
                <LeafSVG fillColor={"white"} />
            </div>
        </div>
    );
};

export default Header;
