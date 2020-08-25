import React from "react";
import ReactDom from "react-dom";

import { Clock } from "./Clock";

function tick() {
    ReactDom.render(
        <Clock date={new Date()}/>, 
        document.querySelector("#root"));
}

setInterval(tick, 1000);

