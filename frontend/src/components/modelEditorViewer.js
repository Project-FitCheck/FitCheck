import { useRef, useState } from 'react';
import { ResponsiveSVG } from '@cutting/svg';
import Slider from 'react-slider';
import '../styles/modelEditor.css';

function ModelEditor() {
    const ref = useRef(null);

    const [imgStyle, setImgStyle] = useState({
        position: "absolute",
        top: "250px",
        left: "250px",
        width: "250px",
        height: "250px"
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

                <img src="../assets/FitCheck_male_template/male_body.svg" style={imgStyle} alt="male body" />
                <img src="../assets/FitCheck_male_template/male_feet.svg" style={imgStyle} alt="male feet" />
                <img src="../assets/FitCheck_male_template/male_head.svg" style={imgStyle} alt="male head" />
                <img src="../assets/FitCheck_male_template/male_leftarm.svg" style={imgStyle} alt="male leftarm" />
                <img src="../assets/FitCheck_male_template/male_legs.svg" style={imgStyle} alt="male legs" />
                <img src="../assets/FitCheck_male_template/male_rightarm.svg" style={imgStyle} alt="male rightarm" />
                <img src="../assets/FitCheck_male_template/male_torso.svg" style={imgStyle} alt="male torso" />

            </ResponsiveSVG>

            {/*sliders*/}

            <div className="sliderX">
                <label>X Position</label>
                <Slider
                    min={0}
                    max={500}
                    value={parseInt(imgStyle.left)}
                    onChange={value => slider("left", value)}
                />
            </div>

            <div className="sliderY">
            <label>Y Position</label>
                <Slider
                    min={0}
                    max={500}
                    value={parseInt(imgStyle.top)}
                    onChange={value => slider("top", value)}
                />
            </div>

            <div className="sliderW">
            <label>Width</label>
                <Slider
                    min={0}
                    max={500}
                    value={parseInt(imgStyle.width)}
                    onChange={value => slider("width", value)}
                />
            </div>

            <div className="sliderH">
            <label>Height</label>
                <Slider
                    min={0}
                    max={500}
                    value={parseInt(imgStyle.height)}
                    onChange={value => slider("height", value)}
                />
            </div>

        </div>
    );
}

export default ModelEditor;