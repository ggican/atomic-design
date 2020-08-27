import React from "react";
import PropTypes from "prop-types";
import LogoStyle from "./index.style";
import Avatar from "../../atoms/avatar";
import Text from "../../atoms/text";

const Logo = props => {
    return (
        <LogoStyle>
            <Avatar {...props}></Avatar>
            <Text.One fontWeight="bold">{props.name}</Text.One>
        </LogoStyle>
    );
};

Logo.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
};
Logo.propTypes = {
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

export default Logo;
