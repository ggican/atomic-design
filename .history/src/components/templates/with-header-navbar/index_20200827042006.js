import React from "react";
import PropTypes from "prop-types";
import PageHomeStyle from "./index.style";
import Header from "../../organisms/header";
import Navbar from "../../molecules/navbar";
import Container from "../../atoms/container";

const WithHeaderNavbar = props => {
    return (
        <>
            <Header {...props}></Header>
            <Container>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci illum itaque voluptatum similique,
                ipsa sequi corporis ut suscipit ipsum ratione est! Laborum tempore hic totam repellendus, quam doloribus
                obcaecati a.
            </Container>
            <Navbar onClick={() => {}}></Navbar>
        </>
    );
};

WithHeaderNavbar.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
};
WithHeaderNavbar.propTypes = {
    /**
       `size` for use size in components avatar
       */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /**
       `type` for use type in components avatar
       */
    type: PropTypes.oneOf(["circle", "rounded", "box"]),
    /**
       `name` for use name in components
       */
    name: PropTypes.string,
    /**
       `image` for use name in components
       */
    image: PropTypes.string,
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};
export default WithHeaderNavbar;
