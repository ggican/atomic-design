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
        <NavbarStyle fixed={props.fixed}>
            <Container>
                <div className="nav-bar">
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
                    <Button
                        onClick={e => props.onClick(e, "learn")}
                        box
                        block
                        iconPosition="top"
                        color="white"
                        icon={<IoIosCalculator size={24} />}
                    >
                        Learn
                    </Button>
                    <Button
                        onClick={e => props.onClick(e, "plus")}
                        box
                        block
                        iconPosition="top"
                        color="white"
                        icon={<BsFillPlusCircleFill size={24} />}
                    >
                        Plus
                    </Button>
                    <Button
                        onClick={e => props.onClick(e, "activity")}
                        box
                        block
                        iconPosition="top"
                        color="white"
                        icon={<MdNotificationsActive size={24} />}
                    >
                        Activty
                    </Button>
                    <Button
                        onClick={e => props.onClick(e, "profile")}
                        box
                        block
                        iconPosition="top"
                        color="white"
                        icon={<IoMdPerson size={24} />}
                    >
                        Profile
                    </Button>
                </div>
            </Container>
        </NavbarStyle>
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
