import { useRef, useState, useEffect } from 'react';
import { ResponsiveSVG } from '@cutting/svg';
import Slider from 'react-slider';
import '../styles/modelEditor.css';
import PartViewer from './partViewer';

function ModelEditor({prop}) {
    const ref = useRef(null);
    const part = prop;

    /*const [imgStyleFeet, setImgStyleFeet] = useState({
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
    });*/

    return (
        <div className="editBody">

            <PartViewer part={part} />

            {/*Male body*/}


            {/*<ResponsiveSVG innerRef={<svg onClick={()=>{part.current=imgStyleFeet; set.current=setImgStyleFeet}} style={imgStyleFeet} href="../assets/FitCheck_male_template/male_feet.svg" />} />
            <ResponsiveSVG innerRef={<svg onClick={()=>{part.current=imgStyleHead; set.current=setImgStyleHead}} style={imgStyleHead} href="../assets/FitCheck_male_template/male_head.svg" />} />
            <ResponsiveSVG innerRef={<svg onClick={()=>{part.current=imgStyleLeftarm; set.current=setImgStyleLeftarm}} style={imgStyleLeftarm} href="../assets/FitCheck_male_template/male_leftarm.svg" />} />
            <ResponsiveSVG innerRef={<svg onClick={()=>{part.current=imgStyleLegs; set.current=setImgStyleLegs}} style={imgStyleLegs} href="../assets/FitCheck_male_template/male_legs.svg" />} />
            <ResponsiveSVG innerRef={<svg onClick={()=>{part.current=imgStyleRightarm; set.current=setImgStyleRightarm}} style={imgStyleRightarm} href="../assets/FitCheck_male_template/male_rightarm.svg" />} />
            <ResponsiveSVG innerRef={<svg onClick={()=>{part.current=imgStyleTorso; set.current=setImgStyleTorso}} style={imgStyleTorso} href="../assets/FitCheck_male_template/male_torso.svg" />} />*/}

            {/*sliders*/}



        </div>
    );
}

export default ModelEditor;