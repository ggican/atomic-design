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
    size: "md",
};
Button.propTypes = {
    /**
      `onSubmit` for function when submut button
      */
    onSubmit: PropTypes.func,
    /**
      `onClick` for function when click button
      */
    onClick: PropTypes.func,
    /**
      `button` for button type element
      */
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
