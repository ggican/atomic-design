import React from "react";
import PropTypes from "prop-types";
import Container from "../../atoms/container";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const WithHeaderLogo = props => {
    return (
        <Container>
            <Logo {...props}></Logo>
            <FormSubscribe></FormSubscribe>
        </Container>
    );
};

export default WithHeaderLogo;
