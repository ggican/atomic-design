import React from "react";
import PropTypes from "prop-types";
import { IoIosChatbubbles, IoIosMore } from "react-icons/io";
import PageHomeStyle from "./index.style";

const Header = props => {
    return (
        <PageHomeStyle>
            <Container>
                <div className="header">
                    <AvatarHeader {...props}></AvatarHeader>
                    <div className="header-right">
                        <Button color="link" icon={<IoIosChatbubbles size={24} />}></Button>
                        <Button color="link" icon={<IoIosMore size={24} />}></Button>
                    </div>
                </div>
            </Container>
        </PageHomeStyle>
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
