<<<<<<< HEAD
import { useRef } from 'react';
import '../styles/modelEditor.css';
import PartViewer from './partViewer';

function ModelEditor({prop}) {
    const ref = useRef(null);
    const part = prop;

    return (
        <div className="editBody">

            <PartViewer part={part} />
=======
import { useRef, useState } from 'react';
import { ResponsiveSVG } from '@cutting/svg';
import Slider from 'react-slider';
import '../styles/modelEditor.css';

function ModelEditor() {
    const ref = useRef(null);

    const [imgStyle, setImgStyle] = useState({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100px",
        height: "100px"
    });

    function slider (prop, value) {
        setImgStyle(prevStyle => ({
            ...prevStyle,
            [prop]: value + "px"
        }));
    };

    return (
        <div className="editBody" ref={ref}>
            <ResponsiveSVG ref={ref}>

                {/*Male body*/}

                <img src="../assets/FitCheck_male_template/male_body.svg" alt="male body" />
                <img src="../assets/FitCheck_male_template/male_feet.svg" alt="male feet" />
                <img src="../assets/FitCheck_male_template/male_head.svg" alt="male head" />
                <img src="../assets/FitCheck_male_template/male_leftarm.svg" alt="male leftarm" />
                <img src="../assets/FitCheck_male_template/male_legs.svg" alt="male legs" />
                <img src="../assets/FitCheck_male_template/male_rightarm.svg" alt="male rightarm" />
                <img src="../assets/FitCheck_male_template/male_torso.svg" alt="male torso" />

            </ResponsiveSVG>

            {/*sliders*/}

            <div className="sliderX">
                <label>Width</label>
                <Slider
                    min={0}
                    max={500}
                    value={parseInt(imgStyle.left)}
                    onChange={value => slider("left", value)}
                />
            </div>

            <div className="sliderY">
            <label>Height</label>
                <Slider
                    min={0}
                    max={500}
                    value={parseInt(imgStyle.top)}
                    onChange={value => slider("top", value)}
                />
            </div>
>>>>>>> a55a3c2 (made a model editor viewer and added sliders)

        </div>
    );
}

export default ModelEditor;