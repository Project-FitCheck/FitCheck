import React from "react";
import '../styles/NavButton.css';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function NavButton(props) {
	let isHighlighted;
	if (props.page === true) {
		isHighlighted = "highlight";
	} else {
		isHighlighted = "noHighlight";
	}
	return (<li className="NavButton"><Button className={isHighlighted} component={Link} to={props.link}>{props.name}</Button></li>);
}

export default NavButton;