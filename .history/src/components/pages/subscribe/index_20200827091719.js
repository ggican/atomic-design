import React from "react";
import PropTypes from "prop-types";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const PageSubscribe = props => {
    const onSubmitSubscribe = () => {};
    return (
        <PageSubscribeStyle>
            <Container>
                <Logo {...props}></Logo>
                <FormSubscribe onSubmit={onSubmitSubscribe}></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

export default PageSubscribe;
