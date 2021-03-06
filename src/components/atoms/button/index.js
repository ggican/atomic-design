import React from "react";
import PropTypes from "prop-types";
import ButtonStyle from "./index.style";

const Button = props => {
    const { children, icon, box } = props;

    return (
        <ButtonStyle noText={children} boxButton={box} selected={true} {...props}>
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
    selected: false,
    children: false,
};
Button.propTypes = {
    /**
      `selected` for active button
      */
    selected: PropTypes.bool,
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
    color: PropTypes.oneOf(["primary", "secondary", "link", "white"]),
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
