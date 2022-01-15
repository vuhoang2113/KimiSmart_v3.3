import React from "react";
import ReactDOM from "react-dom";
import "./i18n";

import Application from "./Application";

const elementID = "root";

if (document.getElementById(elementID)) {
    ReactDOM.render(<Application />, document.getElementById(elementID));
}
