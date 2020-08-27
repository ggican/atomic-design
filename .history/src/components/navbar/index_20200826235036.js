import React from "react";
import NavbarStyle from "./index.style";
import { IoMdCompass, IoIosCalculator, IoMdPerson } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import Button from "../button";

const Navbar = () => {
    return (
        <NavbarStyle>
            <Button box iconPosition="top" color="white" icon={<IoMdCompass size={24} />}>
                Explore
            </Button>
            <Button box iconPosition="top" color="white" icon={<IoIosCalculator size={24} />}>
                Learn
            </Button>
            <Button box iconPosition="top" color="white" icon={<BsFillPlusCircleFill size={24} />}>
                Plus
            </Button>
            <Button box iconPosition="top" color="white" icon={<MdNotificationsActive size={24} />}>
                Activty
            </Button>
            <Button box iconPosition="top" color="white" icon={<IoMdPerson size={24} />}>
                Profile
            </Button>
        </NavbarStyle>
    );
};

export default Navbar;