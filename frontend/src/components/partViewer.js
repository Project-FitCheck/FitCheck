import React from 'react';
import { useState } from 'react';
import Slider from 'react-slider';
import '../styles/modelEditor.css';
import {ResponsiveSVG} from '@cutting/svg';
import {ReactComponent as MaleBody} from "../assets/FitCheck_male_template/male_body.svg"
import {ReactComponent as FemaleBody} from "../assets/FitCheck_female_template/female_body.svg"

function PartViewer({part}) {

    const [imgStyleBody, setImgStyleBody] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
    });

    const [imgStyleFeet, setImgStyleFeet] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
    });

    const [imgStyleHead, setImgStyleHead] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
    });

    const [imgStyleLeftarm, setImgStyleLeftarm] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
    });

    const [imgStyleLegs, setImgStyleLegs] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
    });

    const [imgStyleRightarm, setImgStyleRightarm] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
    });

    const [imgStyleTorso, setImgStyleTorso] = useState({
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
        setImgStyleFeet(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
        setImgStyleHead(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
        setImgStyleLeftarm(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
        setImgStyleLegs(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
        setImgStyleRightarm(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
        setImgStyleTorso(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
    };

    if (part === "male_body" || part === "female_body") {
        return (
            <div className={part}>
                <img src={<ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleBody}> 
                    <MaleBody  />
                    <FemaleBody />
                </ResponsiveSVG>} alt="model part" />
                


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
    if (part === "male_feet" || part === "female_feet") {
        return (
            <div className={part}>

                <ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleFeet}> 
                    <MaleBody  />
                    <FemaleBody />
                </ResponsiveSVG>


                <div className="sliderX">
                    <label>X Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleFeet.left)}
                        onChange={value => slider("left", value)}
                    />
                </div>

                <div className="sliderY">
                    <label>Y Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleFeet.top)}
                        onChange={value => slider("top", value)}
                    />
                </div>

                <div className="sliderW">
                    <label>Width</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleFeet.width)}
                        onChange={value => slider("width", value)}
                    />
                </div>

                <div className="sliderH">
                    <label>Height</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleFeet.height)}
                        onChange={value => slider("height", value)}
                    />
                </div>
            </div>
        )

    }
    if (part === "male_head" || part === "female_head") {
        return (
            <div className={part}>

                <ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleHead}> 
                    <MaleBody  />
                    <FemaleBody />
                </ResponsiveSVG>


                <div className="sliderX">
                    <label>X Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleHead.left)}
                        onChange={value => slider("left", value)}
                    />
                </div>

                <div className="sliderY">
                    <label>Y Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleHead.top)}
                        onChange={value => slider("top", value)}
                    />
                </div>

                <div className="sliderW">
                    <label>Width</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleHead.width)}
                        onChange={value => slider("width", value)}
                    />
                </div>

                <div className="sliderH">
                    <label>Height</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleHead.height)}
                        onChange={value => slider("height", value)}
                    />
                </div>
            </div>
        )

    }
    if (part === "male_leftarm" || part === "female_leftarm") {
        return (
            <div className={part}>

                <ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleLeftarm}> 
                    <MaleBody  />
                    <FemaleBody />
                </ResponsiveSVG>


                <div className="sliderX">
                    <label>X Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLeftarm.left)}
                        onChange={value => slider("left", value)}
                    />
                </div>

                <div className="sliderY">
                    <label>Y Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLeftarm.top)}
                        onChange={value => slider("top", value)}
                    />
                </div>

                <div className="sliderW">
                    <label>Width</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLeftarm.width)}
                        onChange={value => slider("width", value)}
                    />
                </div>

                <div className="sliderH">
                    <label>Height</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLeftarm.height)}
                        onChange={value => slider("height", value)}
                    />
                </div>
            </div>
        )

    }
    if (part === "male_legs" || part === "female_legs") {
        return (
            <div className={part}>

                <ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleLegs}> 
                    <MaleBody  />
                    <FemaleBody />
                </ResponsiveSVG>


                <div className="sliderX">
                    <label>X Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLegs.left)}
                        onChange={value => slider("left", value)}
                    />
                </div>

                <div className="sliderY">
                    <label>Y Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLegs.top)}
                        onChange={value => slider("top", value)}
                    />
                </div>

                <div className="sliderW">
                    <label>Width</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLegs.width)}
                        onChange={value => slider("width", value)}
                    />
                </div>

                <div className="sliderH">
                    <label>Height</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleLegs.height)}
                        onChange={value => slider("height", value)}
                    />
                </div>
            </div>
        )

    }
    if (part === "male_rightarm" || part === "female_rightarm") {
        return (
            <div className={part}>

                <ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleRightarm}> 
                    <MaleBody  />
                    <FemaleBody />
                </ResponsiveSVG>


                <div className="sliderX">
                    <label>X Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleRightarm.left)}
                        onChange={value => slider("left", value)}
                    />
                </div>

                <div className="sliderY">
                    <label>Y Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleRightarm.top)}
                        onChange={value => slider("top", value)}
                    />
                </div>

                <div className="sliderW">
                    <label>Width</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleRightarm.width)}
                        onChange={value => slider("width", value)}
                    />
                </div>

                <div className="sliderH">
                    <label>Height</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleRightarm.height)}
                        onChange={value => slider("height", value)}
                    />
                </div>
            </div>
        )

    }
    if (part === "male_torso" || part === "female_torso") {
        return (
            <div className={part}>

                <ResponsiveSVG  preserveAspectRatio="xMidYMid slice" style={imgStyleTorso}> 
                    <MaleBody  />
                    <FemaleBody />
                </ResponsiveSVG>


                <div className="sliderX">
                    <label>X Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleTorso.left)}
                        onChange={value => slider("left", value)}
                    />
                </div>

                <div className="sliderY">
                    <label>Y Position</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleTorso.top)}
                        onChange={value => slider("top", value)}
                    />
                </div>

                <div className="sliderW">
                    <label>Width</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleTorso.width)}
                        onChange={value => slider("width", value)}
                    />
                </div>

                <div className="sliderH">
                    <label>Height</label>
                    <Slider
                        min={0}
                        max={500}
                        value={parseInt(imgStyleTorso.height)}
                        onChange={value => slider("height", value)}
                    />
                </div>
            </div>
        )

    }
}

export default PartViewer;