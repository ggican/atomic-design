import React from "react";
import { HeaderStyle } from "./index.style";
import Container from "../../atoms/container";
import AvatarHeader from "../../molecules/avatar-header";

const Header = ({ withBackButton = false }) => {
    return (
        <HeaderStyle>
            <Container>
                <AvatarHeader></AvatarHeader>
            </Container>
        </HeaderStyle>
    );
};
export default Header;