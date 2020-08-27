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

export default Logo;
