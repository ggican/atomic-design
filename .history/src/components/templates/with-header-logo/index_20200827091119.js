import React from "react";
import PropTypes from "prop-types";
import WithHeaderLogoStyle from "./index.style";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const WithHeaderLogo = props => {
    return (
        <Container>
            <Logo size="lg" name="Impact Tera" type="circle"></Logo>
            <FormSubscribe></FormSubscribe>
        </Container>
    );
};

WithHeaderLogo.defaultProps = {};
WithHeaderLogo.propTypes = {};
export default WithHeaderLogo;
