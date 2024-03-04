import React from "react";

const Button = ({ Text, onClick, Type = "button"}) => {
    return (
        <button type={Type} onClick={onClick} className="btn">{Text}</button>
    )
}

export default Button