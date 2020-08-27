import React from "react";
import PropTypes from "prop-types";

// begin local import
import AvatarStyle from "./index.style";
// end local import

const Avatar = ({ image, name, size, type }) => {
    return (
        <AvatarStyle type={type} size={size}>
            <div className="avatar">{!!image && <img src={image} alt={name} />}</div>
        </AvatarStyle>
    );
};

Avatar.defaultProps = {
    image: "",
    name: "avatar",
    size: "md",
    type: "box",
};

Avatar.propTypes = {
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

export default Avatar;
