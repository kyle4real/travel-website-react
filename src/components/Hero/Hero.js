import React, { Fragment, useEffect } from "react";

import classes from "./Hero.module.scss";

import coverVID from "./../../assets/cover.mp4";

const Hero = () => {
    return (
        <div className={classes.container}>
            <video
                // autoplay="autoplay"
                muted
                loop="true"
                className={classes.video}
                src={coverVID}
                id={"video"}
            ></video>
            <div className={classes.overlay}></div>
        </div>
    );
};

export default Hero;
