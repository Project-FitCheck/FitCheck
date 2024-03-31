import React, { useEffect, useState } from "react";
import { ReactComponent as MaleModel } from "../assets/FitCheck_male_template/male_body.svg";
import { ReactComponent as FemaleModel } from "../assets/FitCheck_female_template/female_body.svg";
import axios from "axios";
import '../styles/ModelViewer.css';


function ModelViewer({ modelData, mode }) {
    const [model, setModel] = useState(null);
    const [modelGender, setModelGender] = useState(null)

    useEffect(() => {
        async function getModel() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("http://localhost:3001/model/?userId=" + userId);
				response.data.fullBody.replace(/"/g, '');

                setModel(response.data.fullBody);
                setModelGender(response.data.gender);
            } catch (error) {
                console.error("Error fetching model data:", error);
            }
        }
        getModel();
    }, []);


	if (mode === "view") {
		return (<div className="ModelViewer" dangerouslySetInnerHTML={{__html: model}}>
		</div>);
	} else if (mode === "create") {
        if (modelData.gender === "male") {
            return (<div className="ModelViewer">
                <MaleModel />
            </div>);
		} else if (model === "female") {
            return (<div className="ModelViewer">
            	<FemaleModel />
        	</div>);
        }
        else {
            return (<div className="ModelViewer">
                <FemaleModel />
            </div>)
        }
    } else {
        return (
            <div className="ModelViewer">
                {(modelGender === modelData.gender) ? (
                    ("male" === modelData.gender) ? (
                        <MaleModel />
                    ) : (
                        <FemaleModel />
                    )) : (
                    ("female" === modelData.gender) ? (
                        <FemaleModel />
                    ) : (
                        <MaleModel />
                    ))}
            </div>
        );
    }
}

export default ModelViewer;