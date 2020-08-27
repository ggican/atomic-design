import React from "react";
import PropTypes from "prop-types";
import ButtonStyle from "./index.style";

const Button = props => {
    const { children, icon } = props;
    console.log(props.active, props.color, "masuk sini props");

    return (
        <ButtonStyle {...props}>
            {icon && <span>{icon}</span>}
            {children}
        </ButtonStyle>
    );
};

Button.defaultProps = {
    onSubmit: () => {},
    onClick: () => {},
    type: "button",
    text: "",
    size: "md",
    color: "primary",
    block: false,
    icon: false,
    iconPosition: "left",
    box: false,
    active: false,
};
Button.propTypes = {
    /**
      `block` for button color
      */
    active: PropTypes.bool,
    /**
      `block` for button color
      */
    block: PropTypes.bool,
    /**
      `block` for button color
      */
    box: PropTypes.bool,
    /**
      `iconPosition` for button color
      */
    iconPosition: PropTypes.oneOf(["left", "right", "top"]),
    /**
      `color` for button color
      */
    color: PropTypes.oneOf(["primary", "secondary", "link"]),
    /**
      `size` for button size
      */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
    /**
      `icon` for element icon
      */
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]).isRequired,
};

export default Button;
