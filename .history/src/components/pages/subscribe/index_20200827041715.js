import React from "react";
import PropTypes from "prop-types";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import FormSubscribe from "../../organisms/form-subscribe";

const PageSubscribe = props => {
    return (
        <PageSubscribeStyle>
            <Container>
                <FormSubscribe></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

PageSubscribe.defaultProps = {};
PageSubscribe.propTypes = {};
export default PageSubscribe;
