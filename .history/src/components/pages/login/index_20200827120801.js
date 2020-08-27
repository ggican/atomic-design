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

export default PageLogin;
