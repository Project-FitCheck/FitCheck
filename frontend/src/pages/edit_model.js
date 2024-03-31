import React, { useState, useEffect } from "react";
import "../styles/editModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/navbar.js';
import ModelNav from "../components/ModelNav.jsx";
import { CompactPicker } from "react-color"

function EditModel() {
    const [gender, setGender] = useState("");
    const [color, setColor] = useState("");
    //const [modelData, setModelData] = useState({gender: "", head: "", torso: "", leftArm: "", righttArm: "", legs: "", feet: "", fullBody: ""});

    const navigate = useNavigate()

    const skinTones = [
        "#F9E4D6",
        "#F3D9C6",
        "#ffdbc5", // Lightest
        "#EBCBB6",
        "#DEBFA7",
        "#e0ac69",
        "#c68642",
        "#BB8666",
        "#8d5524",
        "#61412D",
        "#5e3c1e",
        "#3E291B",
    ];
    /* useEffect(() => {
        async function updateModel(){
            setModelData({gender, head, torso, leftArm, righttArm, legs, feet})
        }
        updateModel();
    }, [feet, gender, head, leftArm, legs, righttArm, torso]); */


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
            newModel: { gender, fullBody: body }
        }
        await axios.put("http://localhost:3001/model/update", updatedModel);
        navigate("/model");
    }

    return (
        <div className="MainPage">
            <ModelNav />
            <div className="EditModel">
                <NavBar />
                <div className="ModelSettings">
                    <ul>
                        <li className="gender-setting">
                            <div className="male-icon" />
                            <Button className={gender === "male" ? "active" : ""} variant="contained" onClick={() => setGender("male")}>Male</Button>
                            <div className="female-icon" />
                            <Button className={gender === "female" ? "active" : ""} variant="contained" onClick={() => setGender("female")}>Female</Button>
                        </li>
                        <li className="selectColor">
                            <h2> Select Skin Color</h2>
                            <CompactPicker colors={skinTones} color={color} onChangeComplete={setColor} />
                        </li>
                    </ul>
                    <Button className="save-model" onClick={() => saveModel()}>Save Model</Button>
                </div>
                <ModelViewer props={{ gender: gender, color: color.hex, mode: "update" }} />
            </div>
        </div>
    );
}

export default EditModel;
