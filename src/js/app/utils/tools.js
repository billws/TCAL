

export const DetectMobile = (userAgent) => {
    let check = false;
    check = /iPhone|iPad|iPod|Android/i.test(userAgent);
    return check;
}

export const priority = { "*": 2, "/": 2, "+": 1, "-": 1 };

export const CalculateResult = (history) => {
    if (history.length === 0) {
        return 0;
    }
    if (Object.prototype.hasOwnProperty.call(priority, history[history.length - 1])) {
        history = history.slice(0, history.length - 1);
    }

    let postFix = toPostFix(history, 0, [], []);
    return calculatePostFix(postFix, 0)[0];
}

const plusFunc = (a, b, powNumber) => Math.round(a * powNumber + b * powNumber) / powNumber;
const minusFunc = (a, b, powNumber) => Math.round(a * powNumber - b * powNumber) / powNumber;
const multipliFunc = (a, b, powNumber) => Math.round((a * powNumber) * (b * powNumber)) / Math.pow(powNumber, 2);
const divideFunc = (a, b, powNumber) => Math.round((a * powNumber) / (b * powNumber)) / powNumber;

function toPostFix(input, startIndex, postFixArray, opArray) {
    if (startIndex + 1 > input.length) {
        return postFixArray.concat(opArray.reverse());
    }
    if (!Object.prototype.hasOwnProperty.call(priority, input[startIndex])) {
        postFixArray.push(input[startIndex]);
    } else {
        if (opArray.length === 0) {
            opArray.push(input[startIndex]);
        } else {
            for (let i = opArray.length - 1; i > - 1; i--) {
                if (priority[input[startIndex]] > priority[opArray[i]]) {
                    opArray.push(input[startIndex]);
                    break;
                } else {
                    postFixArray.push(opArray.pop());
                    if (opArray.length === 0) {
                        opArray.push(input[startIndex]);
                    }
                }
            }
        }
    }
    return toPostFix(input, ++startIndex, postFixArray, opArray);
}


function calculatePostFix(postFixArray, startIndex) {
    if (startIndex + 1 > postFixArray.length) {
        return postFixArray;
    }
    if (Object.prototype.hasOwnProperty.call(priority, postFixArray[startIndex])) {
        let calArray = postFixArray.splice(startIndex - 2, 3);
        switch (calArray[2]) {
            case "*":
                postFixArray.splice(startIndex - 2, 0, decimalPrecision(calArray[0], calArray[1], multipliFunc));
                break;
            case "/":
                postFixArray.splice(startIndex - 2, 0, decimalPrecision(calArray[0], calArray[1], divideFunc));
                break;
            case "+":
                postFixArray.splice(startIndex - 2, 0, decimalPrecision(calArray[0], calArray[1], plusFunc));
                break;
            case "-":
                postFixArray.splice(startIndex - 2, 0, decimalPrecision(calArray[0], calArray[1], minusFunc));
                break;
        }
        return calculatePostFix(postFixArray, startIndex - 2);
    } else {
        return calculatePostFix(postFixArray, ++startIndex);
    }
}

function decimalPrecision(a, b, opFunc) {
    let aDecimal = (a.toString().split(".")[1] || "").length;
    let bDecimal = (b.toString().split(".")[1] || "").length;
    let powNumber = Math.pow(10, Math.max(aDecimal, bDecimal));
    return opFunc(parseFloat(a), parseFloat(b), powNumber);
}
