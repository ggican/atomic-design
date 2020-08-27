import React from "react";
import PropTypes from "prop-types";
import AvatarHeaderStyle from "./index.style";
import Avatar from "../atoms/avatar";

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
    onClick: PropTypes.func.isRequired,
};

export default AvatarHeader;
