import React, { useState, useEffect } from "react";
import "../styles/editModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"
import ModelNav from '../components/ModelNav';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import NavBar from '../components/navbar.js';

function EditModel() {
    const [gender, setGender] = useState("");
    const [head, setHead] = useState("");
    const [torso, setTorso] = useState("");
    const [leftArm, setLeftArm] = useState("");
    const [righttArm, setRightArm] = useState("");
    const [legs, setLegs] = useState("");
    const [feet, setFeet] = useState("");
    const [active, setActive] = useState("");
    //const [modelData, setModelData] = useState({gender: "", head: "", torso: "", leftArm: "", righttArm: "", legs: "", feet: "", fullBody: ""});

    const navigate = useNavigate()

    /* useEffect(() => {
        async function updateModel(){
            setModelData({gender, head, torso, leftArm, righttArm, legs, feet})
        }
        updateModel();
    }, [feet, gender, head, leftArm, legs, righttArm, torso]); */

    function handleGender(newGender) {
        if (active) {
            setActive("active");
        } else {
            setActive("");
        }
        setGender(newGender)
    }

    useEffect(() => {
        async function getModel() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("http://localhost:3001/model/?userId=" + userId);
                setGender(response.data.gender);
            } catch (error) {
                console.error("Error fetching model data:", error);
            }
        }
        getModel();
    }, []);


    //setModelData({gender, head, torso, leftArm, righttArm, legs, feet})

    async function saveModel() {
        const body = document.getElementById("Body").outerHTML;
        const userId = window.localStorage.getItem("userId");
        console.log(body);
        const updatedModel = {
            userId: userId,
            newModel: { gender, head, torso, leftArm, righttArm, legs, feet, fullBody: body }
        }
        await axios.put("http://localhost:3001/model/update", updatedModel);
        navigate("/model");
    }

    return (<div className="EditModel">
        <ModelNav />
        <div className="ModelSettings">
            <ul>
                <li className="gender-setting">
                    <Button className={active} variant="contained" onClick={() => handleGender("male")}>Male</Button>
                    <Button className={active} variant="contained" onClick={() => handleGender("female")}>Female</Button>
                </li>
                <li className="head-setting">
                    <div className="head-icon" />
                    <Button className={"active" ? active : ""} variant="contained" onClick={() => { setHead("head_svg"); }}>Head</Button>
                </li>
                <li className="torso-setting">
                    <div className="torso-icon" />
                    <Button className={"active" ? active : ""} variant="contained" onClick={() => { setTorso("torso_svg") }}>Torso</Button>
                </li>
                <li className="arms-setting">
                       <div className="arms-icon" />
                    <Button className={"active" ? active : ""} variant="contained" onClick={() => { setLeftArm("left_arm_svg"); setRightArm("right_arm_svg") }}>Arms</Button>
                </li>
                <li className="legs-setting">
                    <div className="legs-icon" />
                    <Button className={"active" ? active : ""} variant="contained" onClick={() => { setLegs("legs_svg") }}>Legs</Button>
                </li>
                <li className="feet-setting">
                    <div className="feet-icon" />
                    <Button className={"active" ? active : ""} variant="contained" onClick={() => { setFeet("feet_svg") }}>Feet</Button>
                </li>
            </ul>
        </div>
        <ModelViewer modelData={{gender:gender, head:head, torso:torso, leftArm:leftArm, righttArm:righttArm, legs:legs, feet:feet}} mode={"update"} />
        <Button className="save-model" onClick={() => saveModel()}>Save Model</Button>
     </div>);
}

export default EditModel;
