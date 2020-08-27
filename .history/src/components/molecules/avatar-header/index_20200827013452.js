import React from "react";
import PropTypes from "prop-types";
import AvatarHeaderStyle from "./index.style";

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