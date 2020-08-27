import React from "react";
import { HeaderStyle } from "./index.style";
import Container from "../../atoms/container";
import AvatarHeader from "../../molecules/avatar-header";

const Header = props => {
    return (
        <HeaderStyle>
            <Container>
                <AvatarHeader {...props}></AvatarHeader>
            </Container>
        </HeaderStyle>
    );
};
export default Header;
