import React from "react";
import LeafSVG from "../../assets/LeafSVG";

import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <LeafSVG fillColor={"white"} />
            <span>Tropic</span>
        </div>
    );
};

export default Logo;
