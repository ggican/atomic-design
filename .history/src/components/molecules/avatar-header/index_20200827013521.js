import React from "react";
import PropTypes from "prop-types";
import AvatarHeaderStyle from "./index.style";

const AvatarHeader = () => {
    return <AvatarHeaderStyle></AvatarHeaderStyle>;
};

AvatarHeader.defaultProps = {
    onClick: () => {},
};
AvatarHeader.propTypes = {
    /**
      `selected` for trigger menu
      */
    onClick: PropTypes.func.isRequired,
};

export default AvatarHeader;
