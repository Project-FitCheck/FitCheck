import React from "react";
import { ReactComponent as MaleModel } from "../assets/FitCheck_male_template/male_body.svg";
import { ReactComponent as FemaleModel } from "../assets/FitCheck_female_template/female_body.svg";

function ModelViewer({model}) {
        if (model === "male") {
            return (<div className="ModelViewer">
                <MaleModel />
            </div>)}
        else if (model === "female") {
            return (<div className="ModelViewer">
            <FemaleModel />
        </div>)
        }

}

export default ModelViewer;