import React from "react";
import PropTypes from "prop-types";
import NavbarStyle from "./index.style";
import { IoMdCompass, IoIosCalculator, IoMdPerson } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import Button from "../../atoms/button";
import Container from "../../atoms/container";

const Navbar = props => {
    return (
        <ReadMoreStyle>
            <Button
                onClick={e => props.onClick(e, "explore")}
                box
                block
                iconPosition="right"
                color="link"
                icon={<IoIosArrowForward size={24} />}
            >
                Read More
            </Button>
        </ReadMoreStyle>
    );
};

Navbar.defaultProps = {
    onClick: () => {},
};
Navbar.propTypes = {
    /**
      `selected` for trigger menu
      */
    onClick: PropTypes.func.isRequired,
};

export default Navbar;
