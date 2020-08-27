import React from "react";

import PropTypes from "prop-types";
import ButtonStyle from "./index.style";

const Button = props => {
    const { text } = props;
    return <ButtonStyle {...props}>{text}</ButtonStyle>;
};

Button.defaultProps = {
    onSubmit: () => {},
    onClick: () => {},
    type: "button",
    text: "",
};
Button.propTypes = {
    onSubmit: PropTypes.func,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit"]),
    text: PropTypes.func,
};

export default Button;
