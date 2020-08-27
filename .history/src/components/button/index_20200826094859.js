import React from "react";
import PropTypes from "prop-types";
import ButtonStyle from "./index.style";

const Button = props => {
    const { children } = props;
    return <ButtonStyle {...props}>{children}</ButtonStyle>;
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
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.bool,
    ]).isRequired,
};

export default Button;
