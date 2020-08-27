import React from "react";
import PropTypes from "prop-types";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const PageSubscribe = props => {
    return (
        <PageSubscribeStyle>
            <Container>
                <Logo size="lg" name="Impact Tera" image={logo} type="circle"></Logo>
                <FormSubscribe></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

PageSubscribe.defaultProps = {};
PageSubscribe.propTypes = {};
export default PageSubscribe;
