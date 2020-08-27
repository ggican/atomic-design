import React from "react";
import PropTypes from "prop-types";
import NavbarStyle from "./index.style";
import Button from "../../atoms/button";
import Container from "../../atoms/container";

const Navbar = props => {
    return (
        <Container>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo perspiciatis perferendis esse amet
            ipsum, asperiores cupiditate hic. Distinctio aspernatur repellat assumenda, sequi expedita ea. Accusamus cum
            blanditiis magnam sequi provident.
        </Container>
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
