import React from "react";
import NavbarStyle from "./index.style";
import { IoMdCompass, IoIosCalculator, IoMdPerson } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import Button from "../button";

const Navbar = () => {
    return (
        <NavbarStyle>
            <Button box iconPosition="top" color="white" icon={<IoMdCompass />}>
                Explore
            </Button>
            <Button box iconPosition="top" color="white" icon={<IoIosCalculator />}>
                Learn
            </Button>
            <Button box iconPosition="top" color="white" icon={<BsFillPlusCircleFill />}>
                Plus
            </Button>
            <Button box iconPosition="top" color="white" icon={<MdNotificationsActive />}>
                Activty
            </Button>
            <Button box iconPosition="top" color="white" icon={<IoMdPerson />}>
                Profile
            </Button>
        </NavbarStyle>
    );
};

export default Navbar;
