import {priority} from "../utils/tools";

export const onNumberClick = (dispatch, previousNumber, number) => {
    if(previousNumber.length === 1 && !Object.prototype.hasOwnProperty.call(priority, previousNumber[0])){
        number = previousNumber[0] + "" + number;
        dispatch({
            type: "TYPE_NUMBER",
            number
        })
    }else{
        dispatch({
            type: "TYPE_NEW_NUMBER",
            number
        })
    }
};
export const onDecimalClick = (dispatch, previousNumber) => {
    if(previousNumber.length === 1 && !Object.prototype.hasOwnProperty.call(priority, previousNumber[0])){
        if(previousNumber[0].indexOf(".") < 0){
            previousNumber[0] = previousNumber[0] + ".";
        }
        dispatch({
            type: "TYPE_Decimal",
            number: previousNumber[0]
        });
    }else{
        dispatch({
            type: "TYPE_NEW_NUMBER",
            number: "0."
        })
    }
};
export const onPlusClick = (dispatch) => dispatch({
    type: "PLUS"
});
export const onMinusClick = (dispatch) => dispatch({
    type: "MINUS"
});
export const onMultipliClick = (dispatch) => dispatch({
    type: "MULTIPLI"
});
export const onDivideClick = (dispatch) => dispatch({
    type: "DIVIDE"
});
export const onEqualClick = (dispatch) => dispatch({
    type: "EQUAL"
});
export const onClearClick = (dispatch) => dispatch({
    type: "CLEAR"
});
