import React from "react";
import NavbarStyle from "./index.style";
import { IoMdSend, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Button from "../button";

const Navbar = () => {
    return (
        <NavbarStyle>
            <Button box iconPosition="top" color="white" icon={<IoMdCompass />}>
                ikhsan
            </Button>
        </NavbarStyle>
    );
};

export default Navbar;
