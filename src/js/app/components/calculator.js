import React, { useState } from "react";
import PropTypes from "prop-types";
import { onNumberClick, onPlusClick, onMinusClick, onClearClick, onDecimalClick, onMultipliClick, onDivideClick, onEqualClick } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";
import { CalculateResult } from "../utils/tools";

const selectInput = state => state.calculator.history.slice(-1);
const selectHistory = state => state.calculator.history;
const showResult = state => state.calculator.showingResult;

const DesktopCal = ({ isMobile }) => {
    const inputValue = useSelector(selectInput);
    const histories = useSelector(selectHistory);
    const isShowResult = useSelector(showResult);
    const dispatch = useDispatch();
    const [isDrag, setIsDrag] = useState(false);
    const [positionStyle, setMousePosition] = useState({ left: "0px", top: "0px" });
    const dragEvent = (e) => {
        if (isDrag && !isMobile) {            
            setMousePosition({ left: e.clientX + "px", top: e.clientY + "px" });
        }
    }

    const dragEnterEvent = (e) => {
        if (!isDrag && !isMobile) {
            e.preventDefault();
            e.stopPropagation();
            setIsDrag(true);
        }
    }

    const dragEndEvent = (e) => {
        if (isDrag && !isMobile) {
            e.preventDefault();
            setMousePosition({ left: e.clientX + "px", top: e.clientY + "px" });
            setIsDrag(false);
        }
    }


    return (
        <div className="wrapper" style={positionStyle}>
            <div className="app" draggable={!isMobile}
                onDrop={dragEndEvent}
                onDrag={dragEvent}
                onDragEnter={dragEnterEvent}
                onDragEnd={dragEndEvent}>
                <div className="history">{histories.join(" ")}</div>
                <div className="viewer">{isShowResult ? CalculateResult(histories) || 0 : (inputValue.length > 0 ? inputValue[0] : 0)}</div>
                <div className="area">
                    <div className="panel functional">
                        <div className="button" onClick={() => onClearClick(dispatch)}>AC</div>
                        <div className="button">+/-</div>
                        <div className="button">%</div>
                    </div>
                    <div className="panel number">
                        <div className="button large" onClick={() => onNumberClick(dispatch, inputValue, "0")}>0</div>
                        <div className="button" onClick={() => onDecimalClick(dispatch, inputValue)}>.</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "1")}>1</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "2")}>2</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "3")}>3</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "4")}>4</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "5")}>5</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "6")}>6</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "7")}>7</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "8")}>8</div>
                        <div className="button" onClick={() => onNumberClick(dispatch, inputValue, "9")}>9</div>
                    </div>
                </div>
                <div className="panel operator">
                    <div className="button" onClick={() => onDivideClick(dispatch)}>÷</div>
                    <div className="button" onClick={() => onMultipliClick(dispatch)}>×</div>
                    <div className="button" onClick={() => onMinusClick(dispatch)}>-</div>
                    <div className="button" onClick={() => onPlusClick(dispatch)}>+</div>
                    <div className="button" onClick={() => onEqualClick(dispatch)}>=</div>
                </div>
            </div>
        </div>
    );
}

DesktopCal.propTypes = {
    isMobile: PropTypes.bool
}

export default DesktopCal;