import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import TCAL from "./app";
import store from "./store";

import "../scss/style.scss";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <TCAL />
        </Provider>
    </React.StrictMode>,
    document.getElementById("Calculator")
);