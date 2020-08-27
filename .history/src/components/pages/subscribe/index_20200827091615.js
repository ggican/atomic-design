import React from "react";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const PageSubscribe = () => {
    return (
        <PageSubscribeStyle>
            <Container>
                <Logo size="lg" name="Impact Tera" type="circle"></Logo>
                <FormSubscribe></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

export default PageSubscribe;
