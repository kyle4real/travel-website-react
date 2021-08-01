import React from "react";

import classes from "./Button.module.scss";

const Button = ({ children, outline, className }) => {
    return (
        <button className={`${classes.button} ${outline ? classes.outline : ""} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
