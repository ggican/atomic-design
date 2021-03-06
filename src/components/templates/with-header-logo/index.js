import React from "react";
import PropTypes from "prop-types";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";

const WithHeaderLogo = props => {
    return (
        <Container>
            <Logo {...props}></Logo>
            {props.children}
        </Container>
    );
};

WithHeaderLogo.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
};
WithHeaderLogo.propTypes = {
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

export default WithHeaderLogo;
