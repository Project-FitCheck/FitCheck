import React, { useState } from "react";
import "../styles/editModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"
import axios from "axios"

function EditModel() {
    const [gender, setGender] = useState(null);
    const [active, setActive] = useState(null);

    function handleClick(newGender) {
        if (active) {
            setActive("active");
        } else {
            setActive("");
        }
        setGender(newGender)
    }

    function saveModel() {
        const updatedModel = {
            userId: "userId",
            newModel: {
                gender: gender,
                head: "head_svg_string",
                leftArm: "left_arm_svg_string",
                rightArm: "right_arm_svg_string", 
                torso: "torso_svg_string",
                legs: "legs_svg_string",
                feet: "feet_svg_string",
                fullBody: "full_body_svg_string"
            }
        }
        axios.put("http://localhost:3001/model/update", updatedModel)
    }
    
    return (
        <div className="EditModel">
            <div className="ModelSettings">
                <ul>
                    <li className="gender-setting">
                        <Button className={active} variant="contained" onClick={() => handleClick("male")}>Male</Button>
                        <Button className={active} variant="contained" onClick={() => handleClick("female")}>Female</Button>
                    </li>
                    <li className="head-setting">
                        <div className="head-icon" />
                        <Button className={"active" ? active : ""} variant="contained">Head</Button>
                    </li>
                    <li className="torso-setting">
                        <div className="torso-icon" />
                        <Button className={"active" ? active : ""} variant="contained">Torso</Button>
                    </li>
                    <li className="arms-setting">
                        <div className="arms-icon" />
                        <Button className={"active" ? active : ""} variant="contained">Arms</Button>
                    </li>
                    <li className="legs-setting">
                        <div className="legs-icon" />
                        <Button className={"active" ? active : ""} variant="contained">Legs</Button>
                    </li>
                    <li className="feet-setting">
                        <div className="feet-icon" />
                        <Button className={"active" ? active : ""} variant="contained">Feet</Button>
                    </li>
                </ul>
            </div>
            <ModelViewer model={gender} />
            <Button className="save-model" onClick={()=> saveModel()}>Save Model</Button>

        </div>
    );
}

export default EditModel;