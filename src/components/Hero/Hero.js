import React from "react";

import classes from "./Hero.module.scss";

import coverVID from "./../../assets/cover.mp4";
import Button from "../../UI/Button/Button";

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
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <h1 className={classes.hero__content__title}>the tropics are waiting</h1>
                    <span className={classes.hero__content__tagline}>
                        Let us know when you're finished packing.
                    </span>
                    <p className={classes.hero__content__description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni repellat
                        dicta expedita sunt, tempore recusandae officiis.
                    </p>
                    <div className={classes.hero__content__cta}>
                        <Button>Book Now</Button>
                        <Button outline>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
