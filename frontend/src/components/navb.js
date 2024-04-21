import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Navb(props) {
    let isHighlighted;
    if (props.page === true) {
        isHighlighted = "highlight";
    } else {
        isHighlighted = "noHighlight";
    }

    return (<Button component={Link} to={props.link} className={[props.name.toLowerCase(), isHighlighted].join(' ')} variant="contained"><img src={props.img} alt=""></img>{props.name}</Button>)
}