import React from "react";
import PropTypes from "prop-types";

// begin local import
import AvatarStyle from "./index.style";
import AvatarLoading from "./index.loading";
// end local import

const Avatar = ({ image }) => {
    return (
        <AvatarStyle>
            <div className="avatar__header">
                <div className="avatar__header__left">
                    <div className="avatar__header top">
                        <div className="avatar__header__avatar">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                </div>
            </div>
        </AvatarStyle>
    );
};

Avatar.Loading = AvatarLoading;

Avatar.defaultProps = {
    image: "",
    name: "avatar",
};

Avatar.propTypes = {
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
