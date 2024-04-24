import React, { useState } from "react";
import { ReactComponent as MaleModel } from "../assets/FitCheck_male_template/male_body.svg";
import { ReactComponent as FemaleModel } from "../assets/FitCheck_female_template/female_body.svg";

function ModelViewer({ props }) {
    const [modelGender] = useState(null)
    //"http://localhost:3001"; //https://fitcheck-backend-7mo5.onrender.com

    if (props.mode === "create") {
        if (props.gender === "male") {
            return (<div className="ModelViewer">
                <MaleModel style={{ 'fill': props.color }} />
            </div>);
        } else if (props.gender === "female") {
            return (<div className="ModelViewer">
                <FemaleModel style={{ 'fill': props.color }} />
            </div>);
        }
    } else if (props.mode === "view") {
        return (<div className="ModelViewer" dangerouslySetInnerHTML={{ __html: props.model }}>
        </div>)
    } else {
        return (
            <div className="ModelViewer">
                {(modelGender === props.gender) ? (
                    ("male" === props.gender) ? (
                        <MaleModel style={{ 'fill': props.color }} />
                    ) : (
                        <FemaleModel style={{ 'fill': props.color }} />
                    )) : (
                    ("female" === props.gender) ? (
                        <FemaleModel style={{ 'fill': props.color }} />
                    ) : (
                        <MaleModel style={{ 'fill': props.color }} />
                    ))}
            </div>
        );
    }
}

export default ModelViewer;