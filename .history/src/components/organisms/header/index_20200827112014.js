import React from "react";
import PropTypes from "prop-types";
import { IoIosNotificationsOutline, IoIosMore } from "react-icons/io";
import HeaderStyle from "./index.style";
import Container from "../../atoms/container";
import Button from "../../atoms/button";
import AvatarHeader from "../../molecules/avatar-header";

const Header = props => {
    return (
        <HeaderStyle fixed={props.fixedHeader}>
            <Container>
                <div className="header">
                    <AvatarHeader {...props}></AvatarHeader>
                    <div className="header-right">
                        <Button color="link" icon={<IoIosNotificationsOutline size={24} />}></Button>
                        <Button color="link" icon={<IoIosMore size={24} />}></Button>
                    </div>
                </div>
            </Container>
        </HeaderStyle>
    );
};

Header.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
    fixedHeader: false,
};
Header.propTypes = {
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
       `fixedHeader` for use fixedHeader in components
       */
    fixedHeader: PropTypes.bool,
    /**
       `image` for use name in components
       */
    image: PropTypes.string,
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};
export default Header;
