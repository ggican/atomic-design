import React from "react";
import PropTypes from "prop-types";

// begin local import
import AvatarStyle from "./index.style";
// end local import

const Container = ({ image, name, size, type }) => {
    return (
        <AvatarStyle type={type} size={size}>
            <div className="avatar">{!!image && <img src={image} alt={name} />}</div>
        </AvatarStyle>
    );
};

Container.defaultProps = {
    image: "",
    name: "avatar",
    size: "md",
    type: "box",
};

Container.propTypes = {};

export default Container;
