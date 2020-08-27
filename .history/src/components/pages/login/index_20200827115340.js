import React from "react";
import PropTypes from "prop-types";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const PageLogin = props => {
    const onSubmitSubscribe = e => {
        console.log(e);
        alert("masuk sini");
        console.log(e.target.name.email);
    };
    return (
        <PageSubscribeStyle>
            <Container>
                <Logo {...props}></Logo>
                <FormSubscribe onSubmitForm={onSubmitSubscribe}></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

PageLogin.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
};
PageLogin.propTypes = {
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

export default PageLogin;
