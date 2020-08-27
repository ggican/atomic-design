import React from "react";
import PropTypes from "prop-types";
import NavbarStyle from "./index.style";
import { IoMdCompass, IoIosCalculator, IoMdPerson } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import Button from "../button";

const Navbar = () => {
    return (
        <NavbarStyle>
            <Button box block iconPosition="top" color="white" icon={<IoMdCompass size={24} />}>
                Explore
            </Button>
            <Button box block iconPosition="top" color="white" icon={<IoIosCalculator size={24} />}>
                Learn
            </Button>
            <Button box block iconPosition="top" color="white" icon={<BsFillPlusCircleFill size={24} />}>
                Plus
            </Button>
            <Button box block iconPosition="top" color="white" icon={<MdNotificationsActive size={24} />}>
                Activty
            </Button>
            <Button box block iconPosition="top" color="white" icon={<IoMdPerson size={24} />}>
                Profile
            </Button>
        </NavbarStyle>
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

export default Navbar;
