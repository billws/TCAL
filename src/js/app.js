import React, {useState} from "react";
import {DetectMobile} from "./app/utils/tools";
import DesktopCal from "./app/components/calculator";

const TCAL = () => {
    const [isMobile, setMobile] = useState(false);
    const [openedCalculator, setOpenCalculator] = useState(false);
    const onClickOpenCalculator = () => {
        setMobile(DetectMobile(navigator.userAgent));
        setOpenCalculator(true);
    };
    return (
        <div>
            {openedCalculator ? <DesktopCal isMobile={isMobile}></DesktopCal> : <button onClick={onClickOpenCalculator}>Calculator</button>}
        </div>
    );
};




export default TCAL;