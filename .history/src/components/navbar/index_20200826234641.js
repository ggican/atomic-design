import React from "react";
import NavbarStyle from "./index.style";
import { IoMdSend, IoMdCompass, IoIosCalculator } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Button from "../button";

const Navbar = () => {
    return (
        <NavbarStyle>
            <Button box iconPosition="top" color="white" icon={<IoMdCompass />}>
                ikhsan
            </Button>
            <Button box iconPosition="top" color="white" icon={<IoIosCalculator />}>
                ikhsan
            </Button>
        </NavbarStyle>
    );
};

export default Navbar;
