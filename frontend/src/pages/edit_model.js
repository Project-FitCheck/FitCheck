<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import "../styles/editModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"
import PartViewer from "../components/partViewer";

function EditModel() {

    const [showSliders, setShowSliders] = useState(false);
    const [Part, setPart] = useState("male_body");

    const handleButtonClick = (part) => {
        setPart(part);
        setShowSliders(true);
    };

    return (
        <div className="EditModel">
            <ModelViewer />
            <div className="ModelSettings">
                <ul>
                    <li className="gender-setting">
                        <Button variant="contained" onClick={() => handleButtonClick("male_body")}>Male</Button>
                        <Button variant="contained" onClick={handleButtonClick}>Female</Button>
                    </li>
                    <li className="head-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Head</Button>
                        {/*Head button that goes to page to 
                        edit head size on full model*/}
                    </li>
                    <li className="torso-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Torso</Button>
                        {/*Torso button that goes to page to 
                        edit torso length and width while on
                        full model*/}
                    </li>
                    <li className="arms-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Arms</Button>
                        {/*Arms button that goes to page to 
                        edit arm length and thickness while
                        on full model*/}
                    </li>
                    <li className="legs-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Legs</Button>
                        {/*Legs button that goes to page to 
                        edit arm length and thickness while
                        on full model*/}
                    </li>
                    <li className="feet-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Feet</Button>
                        {/*Feet button that goes to page to 
                        edit feet size on fill model*/}
                    </li>
                </ul>
            </div>

            {showSliders && Part && <PartViewer part={Part} />}
        </div>
    );
=======
import React from "react";
=======
import React, {useState} from "react";
>>>>>>> a55a3c2 (made a model editor viewer and added sliders)
import "../styles/editModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"
import ModelEditor from "../components/modelEditorViewer"

function EditModel() {

    const [showSliders, setShowSliders] = useState(false);

    const handleButtonClick = () => {
        setShowSliders(true);
    };

    return (
<<<<<<< HEAD
        <div></div>
    )
>>>>>>> 0d7b7dd (Pages (#26))
=======
        <div className="EditModel">
            <ModelViewer />
            <div className="ModelSettings">
                <ul>
                    <li className="gender-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Male</Button>
                        <Button variant="contained" onClick={handleButtonClick}>Female</Button>
                    </li>
                    <li className="head-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Head</Button>
                        {/*Head button that goes to page to 
                        edit head size on full model*/}
                    </li>
                    <li className="torso-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Torso</Button>
                        {/*Torso button that goes to page to 
                        edit torso length and width while on
                        full model*/}
                    </li>
                    <li className="arms-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Arms</Button>
                        {/*Arms button that goes to page to 
                        edit arm length and thickness while
                        on full model*/}
                    </li>
                    <li className="legs-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Legs</Button>
                        {/*Legs button that goes to page to 
                        edit arm length and thickness while
                        on full model*/}
                    </li>
                    <li className="feet-setting">
                        <Button variant="contained" onClick={handleButtonClick}>Feet</Button>
                        {/*Feet button that goes to page to 
                        edit feet size on fill model*/}
                    </li>
                </ul>
            </div>
            {showSliders && <ModelEditor />}
        </div>
    );
>>>>>>> 4c845da (copy and added some files)
}

export default EditModel;