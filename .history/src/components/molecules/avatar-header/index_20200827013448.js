import React from "react";
import PropTypes from "prop-types";
import NavbarStyle from "./index.style";

import Button from "../button";

const Navbar = props => {
    return <AvatarHeaderStyle></AvatarHeaderStyle>;
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
