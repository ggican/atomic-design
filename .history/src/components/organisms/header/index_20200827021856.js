import React from "react";
import PropTypes from "prop-types";
import { IoIosChatbubbles, IoIoMore } from "react-icons/io";
import Header from "./index.style";
import Container from "../../atoms/container";
import Button from "../../atoms/button";
import AvatarHeader from "../../molecules/avatar-header";

const Header = props => {
    return (
        <HeaderStyle>
            <Container>
                <div className="header">
                    <AvatarHeader {...props}></AvatarHeader>
                    <div className="header-right">
                        <Button color="white" icon={<IoIosChatbubbles size={24} />}></Button>
                        <Button color="white" icon={<IoIoMore size={24} />}></Button>
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
       `image` for use name in components
       */
    image: PropTypes.string,
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};
export default Header;
