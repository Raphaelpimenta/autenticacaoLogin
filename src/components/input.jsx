import React from "react";

const Input = ({type, placeholder, value, onChange}) => {
    return (
        <input value={value} type={type} onChange={onChange} placeholder={placeholder} className="input" />
    )
}

export default Input;