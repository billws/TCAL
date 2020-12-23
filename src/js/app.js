import React, { useState, useEffect } from "react";
import { DetectMobile } from "./app/utils/tools";
import DesktopCal from "./app/components/calculator";

const TCAL = () => {
    const [isMobile, setMobile] = useState(false);
    const [openedCalculator, setOpenCalculator] = useState(false);
    const onClickOpenCalculator = (e) => {
        e.stopPropagation();
        setMobile(DetectMobile(navigator.userAgent));
        setOpenCalculator(true);
    };

    const ClickOther = (e) => {
        if (e.target.nodeName === "HTML") {
            e.stopPropagation();
            e.stopPropagation();
            setOpenCalculator(false);
        }

    };

    useEffect(() => {
        document.addEventListener("click", ClickOther);
        return () => {
            document.removeEventListener("click", ClickOther);
        };
    });
    return (
        <div>
            {openedCalculator ? <DesktopCal isMobile={isMobile}></DesktopCal> : <button onClick={onClickOpenCalculator}>Calculator</button>}
        </div>
    );
};




export default TCAL;