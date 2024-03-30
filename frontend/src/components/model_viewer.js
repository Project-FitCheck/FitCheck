import React, { useEffect, useState } from "react";
import { ReactComponent as MaleModel } from "../assets/FitCheck_male_template/male_body.svg";
import { ReactComponent as FemaleModel } from "../assets/FitCheck_female_template/female_body.svg";
import axios from "axios";

function ModelViewer({ props }) {
    const [model, setModel] = useState(null);
    const [modelGender, setModelGender] = useState(null)

    useEffect(() => {
        async function getModel() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("http://localhost:3001/model/?userId=" + userId);
                setModel(response.data.fullBody);
                setModelGender(response.data.gender);
            } catch (error) {
                console.error("Error fetching model data:", error);
            }
        }
        getModel();
    }, []);



    if (props.mode === "create") {
        if (props.gender === "male") {
            return (<div className="ModelViewer">
                <MaleModel style={{ '--svg-fill-color': props.color }} />
            </div>);
        } else if (props.gender === "female") {
            return (<div className="ModelViewer">
                <FemaleModel style={{ '--svg-fill-color': props.color }} />
            </div>);
        }
    } else if (props.mode === "view") {
        <div className="ModelViewer">
            {model}
        </div>
    } else {
        console.log(props.color);
        console.log(modelGender);
        return (
            <div className="ModelViewer">
                {(modelGender === props.gender) ? (
                    ("male" === props.gender) ? (
                        <MaleModel style={{ '--svg-fill-color': props.color }}/>
                    ) : (
                        <FemaleModel style={{ '--svg-fill-color': props.color }}/>
                    )) : (
                    ("female" === props.gender) ? (
                        <FemaleModel style={{ '--svg-fill-color': props.color }}/>
                    ) : (
                        <MaleModel style={{ '--svg-fill-color': props.color }}/>
                    ))}
            </div>
        );
    }
}

export default ModelViewer;