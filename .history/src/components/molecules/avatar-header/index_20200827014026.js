import React from "react";
import PropTypes from "prop-types";
import AvatarHeaderStyle from "./index.style";
import Avatar from "../../atoms/avatar";

const AvatarHeader = () => {
    return (
        <AvatarHeaderStyle>
            <Avatar></Avatar>
        </AvatarHeaderStyle>
    );
};

AvatarHeader.defaultProps = {
    onClick: () => {},
};
AvatarHeader.propTypes = {
    /**
      `selected` for trigger menu
      */

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
