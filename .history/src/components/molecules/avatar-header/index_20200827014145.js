import React from "react";
import PropTypes from "prop-types";
import AvatarHeaderStyle from "./index.style";
import Avatar from "../../atoms/avatar";

const AvatarHeader = props => {
    return (
        <AvatarHeaderStyle>
            <Avatar {...props}></Avatar>
        </AvatarHeaderStyle>
    );
};

AvatarHeader.defaultProps = {
    onClick: () => {},
};
AvatarHeader.propTypes = {
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
};

export default AvatarHeader;
