import React from "react";
import classNames from "classnames";

export const Button = ({cart, outline, children,add,goBack,pay}) => {
    return (
        <button className={classNames("button", {
            'button--cart' : cart,
            'button--outline' : outline,
            'button--add' : add,
            'go-back-btn' : goBack,
            'pay-btn': pay,
        })}>
            {children}
        </button>
    );
};