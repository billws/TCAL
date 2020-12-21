
const initialState = {
    history: [],
    isOpt: false,
    showingResult: false
};

const calReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TYPE_NEW_NUMBER":
            return {
                ...state,
                history: state.history.slice().concat([action.number]),
                isOpt: false,
                showingResult: false
            };
        case "TYPE_NUMBER":
            return {
                ...state,
                history: state.history.slice(0, -1).concat([action.number]),
                isOpt: false,
                showingResult: false
            };
        case "TYPE_Decimal":
            return {
                ...state,
                history: state.history.slice(0, -1).concat([action.number]),
                isOpt: false
            };
        case "PLUS":
            return {
                ...state,
                history: state.history.slice().concat(["+"]),
                isOpt: true,
                showingResult: true
            };
        case "MINUS":
            return {
                ...state,
                history: state.history.slice().concat(["-"]),
                isOpt: true,
                showingResult: true
            };
        case "CLEAR":
            return {
                ...state,
                history: [],
                isOpt: true,
                showingResult: true
            };
        case "MULTIPLI":
            return {
                ...state,
                history: state.history.slice().concat(["*"]),
                isOpt: true,
                showingResult: true
            };
        case "DIVIDE":
            return {
                ...state,
                history: state.history.slice().concat(["/"]),
                isOpt: true,
                showingResult: true
            };
        case "EQUAL":
            return {
                ...state,
                isOpt: false,
                showingResult: true
            };
        default:
            return state;
    }
};

export default calReducer;