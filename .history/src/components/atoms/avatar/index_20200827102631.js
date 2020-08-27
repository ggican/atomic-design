import React from "react";
import PropTypes from "prop-types";

// begin local import
import AvatarStyle from "./index.style";
// end local import

const Avatar = ({ image, name, size, type, full }) => {
    return (
        <AvatarStyle full={full} type={type} size={size}>
            <div className="avatar">{!!image && <img src={image} alt={name} />}</div>
        </AvatarStyle>
    );
};

Avatar.defaultProps = {
    image: "",
    name: "avatar",
    size: "md",
    type: "box",
    full: false,
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
    /**
       `image` for use name in components
       */
    full: PropTypes.bool,
};

export default Avatar;
