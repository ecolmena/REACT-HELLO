import React from "react";
import ReactDom from "react-dom";

import { Clock } from "./Clock";

ReactDom.render(
        <Clock />, 
        document.querySelector("#root"));
