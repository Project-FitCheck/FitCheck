import React, { useState } from "react";
import "../styles/createModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import NavBar from '../components/navbar.js';



function CreateModel() {
    const [gender, setGender] = useState(null);
    const [active, setActive] = useState(null);
    const [modelData, setModelData] = useState(null);

    const navigate = useNavigate()
    function handleClick(newGender) {
        setActive(newGender === gender ? "active" : ""); // Adjust logic for setting active class
        setGender(newGender);
    }

    const createModel = async () => {
        const svgFullBody = document.getElementById("Body").outerHTML;
        const userId = window.localStorage.getItem("userId");
        console.log(userId);
        setModelData({
            userId: userId,
            modelData: {
                fullBody: svgFullBody,
                gender: gender,
                head: "tba",
                leftArm: "tba",
                rightArm: "tba",
                torso: "tba",
                legs: "tba",
                feet: "tba",
            }
        });

        try {
            await axios.put("http://localhost:3001/model/create", modelData);
            navigate("/closet");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="CreateModel">
            <NavBar />
            <div className="ModelSettings">
                <ul>
                    <li className="gender-setting">
                        <Button className={active} variant="contained" onClick={() => handleClick("male")}>Male</Button>
                        <Button className={active} variant="contained" onClick={() => handleClick("female")}>Female</Button>
                    </li>
                    {/*<li className="head-setting">
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
    </li>*/}
                </ul>
            </div>
            <ModelViewer modelData={{ gender: gender, head: "head", torso: "torso", leftArm: "leftArm", righttArm: "righttArm", legs: "legs", feet: "feet" }} mode={"create"} />
            <Button /* component={ Link } to="/closet" */ className="save-model" onClick={() => createModel()}>Create Model</Button>
        </div>
    );
}

export default CreateModel;