import React from "react";
import ReactDom from "react-dom";

import { Clock } from "./Clock2";

function tick() {
    ReactDom.render(
        <Clock />, 
        document.querySelector("#root"));
}

setInterval(tick, 1000);

