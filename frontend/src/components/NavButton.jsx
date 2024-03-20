import React from "react";
<<<<<<< HEAD
import '../styles/NavButton.css';
=======
import '../CSS/NavButton.css';
>>>>>>> 39bcb2d (Added components and homepage (#30))

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