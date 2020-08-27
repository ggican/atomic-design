import React from "react";
import PropTypes from "prop-types";

import { StyleSpinner } from "./index.style";

const Spinner = ({ color = "lightGreen" }) => {
    return (
        <StyleSpinner color={color}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </StyleSpinner>
    );
};

Spinner.defaultProps = {
    color: "aquamarine",
};
Spinner.propTypes = {
    /**
      `color` for color for loading spinner
      */
    color: PropTypes.oneOf([
        "green",
        "yellow",
        "lightGreen",
        "whiteGreen",
        "lightYellow",
        "white",
        "darkGrey",
        "grey",
        "lightGrey",
        "whiteGrey",
    ]),
};

export default Spinner;
