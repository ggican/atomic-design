import React from "react";
import NavbarStyle from "./index.style";
import { IoMdSend, IoMdCompass, IoIosCalculator } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import Button from "../button";

const Navbar = () => {
    return (
        <NavbarStyle>
            <Button box iconPosition="top" color="white" icon={<IoMdCompass />}>
                ikhsan
            </Button>
            <Button box iconPosition="top" color="white" icon={<BsFillPlusCircleFill />}>
                ikhsan
            </Button>
        </NavbarStyle>
    );
};

export default Navbar;
