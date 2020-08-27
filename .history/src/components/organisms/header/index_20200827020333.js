import React from "react";
import { HeaderStyle } from "./index.style";
// HeaderContainer, HeaderBadge, HeaderLogo
// import Button from "../button";
// import Icons from "../icons";

const Header = ({ withBackButton = false }) => {
    return (
        <HeaderStyle>
            <Container>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, libero totam. Pariatur sint aliquid,
                officiis laborum, omnis ex quam optio earum laudantium ducimus ipsa asperiores ipsum eaque accusamus
                tempora esse!
            </Container>
        </HeaderStyle>
    );
};
export default Header;
