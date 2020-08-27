import React from "react";
import PropTypes from "prop-types";
import { IoMdSend, IoIosChatbubbles, IoIosArrowBack } from "react-icons/io";
import { HeaderStyle } from "./index.style";
import Container from "../../atoms/container";
import Button from "../../atoms/button";
import AvatarHeader from "../../molecules/avatar-header";

const Header = props => {
    return (
        <HeaderStyle>
            <Container>
                <AvatarHeader {...props}></AvatarHeader>
                <div className="header-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti eius perspiciatis hic,
                    suscipit omnis reprehenderit nemo mollitia aspernatur vel maiores atque veniam delectus. Nesciunt
                    non quisquam adipisci excepturi quaerat?
                    <Button icon={<IoIosChatbubbles size={24} />}>Button Example</Button>
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
