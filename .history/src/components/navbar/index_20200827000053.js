import React from "react";
import PropTypes from "prop-types";
import NavbarStyle from "./index.style";
import { IoMdCompass, IoIosCalculator, IoMdPerson } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import Button from "../button";

const Navbar = props => {
    return (
        <NavbarStyle>
            <Button
                onClick={e => props.onClick(e, "explore")}
                box
                block
                iconPosition="top"
                color="white"
                icon={<IoMdCompass size={24} />}
            >
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

Navbar.defaultProps = {
    onClick: () => {},
};
Navbar.propTypes = {
    /**
      `selected` for active button
      */
    onClick: PropTypes.function.isRequired,
};

export default Navbar;
