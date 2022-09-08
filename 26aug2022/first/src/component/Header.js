// Uppercase of Header.js's H is naming convention
import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import Button from "./Button";
const Header = ({title}) => {
    const onClick = (e) =>{
        console.log("click",e);
    };
    return (
        <header>
            <h1>Hello Header</h1>
            <Button text="Hello1" color="green" onClick={onClick}/>
            <Button text="Hello1" color="green" onClick={onClick}/>
        </header>
    )
};
const headingStyle = {
    color: "darkcyan",
    backgroundColor: "lightblue",
    textAlign: "centre",
};
Header.defaultProps = {
    title: "Task Tracker",
};
Header.prototype = {
    title: PropTypes.string.isRequired,
};
export default Header;
