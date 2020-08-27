import React from "react";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const PageSubscribe = props => {
    const onSubmit = () => {};
    return (
        <PageSubscribeStyle>
            <Container>
                <Logo {...props}></Logo>
                <FormSubscribe onSubmit={}></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

export default PageSubscribe;
