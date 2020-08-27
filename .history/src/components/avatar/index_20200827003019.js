import React from "react";
import PropTypes from "prop-types";

// begin local import
import AvatarStyle from "./index.style";
// end local import

const Avatar = ({ image, name, size }) => {
    return (
        <AvatarStyle size={size}>
            <div className="avatar__header">
                <div className="avatar__header__avatar">
                    <img src={image} alt={name} />
                </div>
            </div>
        </AvatarStyle>
    );
};

Avatar.defaultProps = {
    image: "",
    name: "avatar",
    size: "md",
};

Avatar.propTypes = {
    /**
       `size` for use size in components avatar
       */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
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
