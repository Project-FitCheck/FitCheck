import React from 'react';
import { useState } from 'react';
import Slider from 'react-slider';
import '../styles/modelEditor.css';
import {ResponsiveSVG} from '@cutting/svg';
import {ReactComponent as MaleBody} from "../assets/FitCheck_male_template/male_body.svg"

function PartViewer({part}) {

    console.log({part});

    const [imgStyleBody, setImgStyleBody] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
    });

    function slider(prop, value) {
        setImgStyleBody(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
    };

    if (part === "male_body") {
        return (
            <div className={part}>

                <ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleBody}> 
                    <MaleBody  />
                </ResponsiveSVG>


                <div className="sliderX">
                    <label>X Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleBody.left)}
                        onChange={value => slider("left", value)}
                    />
                </div>

                <div className="sliderY">
                    <label>Y Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleBody.top)}
                        onChange={value => slider("top", value)}
                    />
                </div>

                <div className="sliderW">
                    <label>Width</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleBody.width)}
                        onChange={value => slider("width", value)}
                    />
                </div>

                <div className="sliderH">
                    <label>Height</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleBody.height)}
                        onChange={value => slider("height", value)}
                    />
                </div>
            </div>
        )

    }
    if (part === "male_feet") {

    }
    if (part === "male_head") {

    }
    if (part === "male_leftarm") {

    }
    if (part === "male_legs") {

    }
    if (part === "male_rightarm") {

    }
    if (part === "male_torso") {

    }
}

export default PartViewer;