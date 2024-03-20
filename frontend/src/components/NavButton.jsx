import React from "react";
import '../styles/NavButton.css';

function NavButton(props) {
	let isHighlighted;
	if (props.page === true) {
		isHighlighted = "highlight";
	} else {
		isHighlighted = "noHighlight";
	}
	return (<li className="NavButton"><a className={isHighlighted} href={props.link}>{props.name}</a></li>);
}

export default NavButton;