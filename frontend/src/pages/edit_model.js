import React from "react";
import "../styles/editModel.css";
import { Button } from "@mui/base";
import ModelViewer from "../components/model_viewer"

function EditModel() {
    return (
        <div className="EditModel">
            <ModelViewer />
            <div className="ModelSettings">
                <ul>
                    <li className="gender-setting">
                        <Button variant="contained">Male</Button>
                        <Button variant="contained">Female</Button>
                    </li>
                    <li className="head-setting">
                        <Button variant="contained">Head</Button>
                        {/*Head button that goes to page to 
                        edit head size on full model*/}
                    </li>
                    <li className="torso-setting">
                        <Button variant="contained">Torso</Button>
                        {/*Torso button that goes to page to 
                        edit torso length and width while on
                        full model*/}
                    </li>
                    <li className="arms-setting">
                        <Button variant="contained">Arms</Button>
                        {/*Arms button that goes to page to 
                        edit arm length and thickness while
                        on full model*/}
                    </li>
                    <li className="legs-setting">
                        <Button variant="contained">Legs</Button>
                        {/*Legs button that goes to page to 
                        edit arm length and thickness while
                        on full model*/}
                    </li>
                    <li className="feet-setting">
                        <Button variant="contained">Feet</Button>
                        {/*Feet button that goes to page to 
                        edit feet size on fill model*/}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EditModel;