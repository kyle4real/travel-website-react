import React, { useEffect, useState } from "react";

import classes from "./Header.module.scss";

import { CgMenuRight, CgClose } from "react-icons/cg";
import LeafSVG from "../../assets/LeafSVG.js";
import Nav from "./Nav/Nav";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const size = useWindowSize();

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size, menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen((p) => !p);
    };

    const menuToggle = !menuOpen ? (
        <CgMenuRight onClick={handleMenuToggle} />
    ) : (
        <CgClose onClick={handleMenuToggle} />
    );

    return (
        <div className={classes.header}>
            <div className={classes.header__logo}>
                <LeafSVG fillColor={"white"} />
                <span>Tropic</span>
            </div>
            <Nav />
            <div className={classes.header__menu}>
                <div className={classes.header__menu__toggle}>{menuToggle}</div>
                <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
                    <Nav isMenu />
                </aside>
            </div>
        </div>
    );
};

export default Header;
