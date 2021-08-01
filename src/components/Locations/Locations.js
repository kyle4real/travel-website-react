import React from "react";

import classes from "./Locations.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import BoraBoraJPG from "./../../assets/borabora.jpg";
import MaldivesJPG from "./../../assets/maldives.jpg";
import CaboSanLucasJPG from "./../../assets/cabosanlucas.jpg";
import CroatiaJPG from "./../../assets/croatia.jpg";
import GreeceJPG from "./../../assets/greece.jpg";
import AlbaniaJPG from "./../../assets/albania.jpg";

const locationData = [
    { id: 1, location: "Bora Bora", isFeatured: true, img: BoraBoraJPG },
    { id: 2, location: "Maldives", isFeatured: true, img: MaldivesJPG },
    { id: 3, location: "Cabo San Lucas", isFeatured: false, img: CaboSanLucasJPG },
    { id: 3, location: "Croatia", isFeatured: false, img: CroatiaJPG },
    { id: 3, location: "Greece", isFeatured: false, img: GreeceJPG },
    { id: 3, location: "Albania", isFeatured: true, img: AlbaniaJPG },
];

const Locations = () => {
    return (
        <div className={classes.container}>
            <div className={classes.locations}>
                <div className={classes.locations__content}>
                    <h2 className={classes.locations__content__title}>Discover a Tropic</h2>
                    <div className={classes.locations__content__gallery}>
                        {locationData.map(({ id, location, isFeatured, img }) => (
                            <div className={classes.gallery__item} key={id}>
                                <img
                                    className={classes.gallery__item__img}
                                    src={img}
                                    alt="tropic 1"
                                />
                                <div className={classes.overlay} />
                                <div className={classes.gallery__item__content}>
                                    <IoLocationOutline />
                                    <h2 className={classes.gallery__item__content__location}>
                                        {location}
                                    </h2>
                                </div>
                                {isFeatured && (
                                    <div className={classes.gallery__item__tag}>Featured</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={classes.locations__content__viewmore}>
                        <a href="/">
                            view more
                            <BsArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
