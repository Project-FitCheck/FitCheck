import React, { useState } from "react";
import "../styles/createModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import ModelNav from "../components/ModelNav.jsx";
import { CompactPicker } from "react-color";



function CreateModel() {
    const [gender, setGender] = useState("");
    const [color, setColor] = useState("");
    const [error, setError] = useState("");
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

    const createModel = async () => {
        try {
            const userId = window.localStorage.getItem("userId");
            const svgFullBody = document.getElementById("Body").outerHTML;
            const modelData = {
                userId: userId,
                model: {
                    fullBody: svgFullBody,
                    gender: gender, // Assuming gender is defined somewhere
                }
            };
            console.log(modelData); // Log before sending request

            await axios.put("https://fitcheck-backend-7mo5.onrender.com/model/create", modelData);
            navigate("/closet");
        } catch (error) {
            setError("Please Create Your Model"); // Handle error
            console.error(error);
        }
    }

    return (
        <div className="CreateModel">
            <ModelNav props={{ mode: "create" }} />
            <div className="ModelSettings">
                <ul>
                    <li className="gender-setting">
                        <div className="male-icon" />
                        <Button className={gender === "male" ? "active" : ""} variant="contained" onClick={() => { setGender("male"); setError("") }}>Male</Button>
                        <div className="female-icon" />
                        <Button className={gender === "female" ? "active" : ""} variant="contained" onClick={() => { setGender("female"); setError("") }}>Female</Button>
                    </li>
                    <li className="selectColor">
                        <h2> Select Skin Color</h2>
                        <CompactPicker colors={skinTones} color={color} onChangeComplete={setColor} />
                    </li>
                </ul>
                <Button className="create-model" style={
                    {
                        "position": "relative",
                        "top": "400px",
                        "left": "25%",
                        "width": "12em"
                    }} onClick={() => { createModel() }}>Create Model</Button>
                {error && <div style={{ position: "relative", top: "410px", color: 'red', textAlign: 'center' }}>{error}</div>}

            </div>
            <ModelViewer props={{ gender: gender, color: color.hex, mode: "create" }} />
        </div>
    );
}

export default CreateModel;