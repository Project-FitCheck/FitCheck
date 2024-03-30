import React, { useState } from "react";
import "../styles/createModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import NavBar from '../components/navbar.js';
import ModelNav from "../components/ModelNav.jsx";
import { CompactPicker } from "react-color";



function CreateModel() {
    const [gender, setGender] = useState("");
    const [modelData, setModelData] = useState(null);
    const [color, setColor] = useState("");

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
        const svgFullBody = document.getElementById("Body").outerHTML;
        const userId = window.localStorage.getItem("userId");
        console.log(userId);
        setModelData({
            userId: userId,
            modelData: {
                fullBody: svgFullBody,
                gender: gender,
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
                    <Button className="create-model" style={
                        {
                            "position": "relative",
                            "top": "400px",
                            "left": "25%",
                            "width": "12em"
                        }} onClick={() => createModel()}>Create Model</Button>
                </div>
                <ModelViewer props={{ gender: gender, color: color.hex, mode: "create" }} />
            </div>
        </div>
    );
}

export default CreateModel;