import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";
import localStorage from "../../../utils/local-storage";

const PageLogin = props => {
    let history = useHistory();
    const onSubmitSubscribe = e => {
        e.preventDefault();
        const { email, password } = e.target;
        if (email.value && password.value) {
            localStorage().save("auth", "true");
            history.push("/");
        }
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
};

export default PageLogin;
