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
                <Logo size="lg" name="Impact Tera" type="circle"></Logo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a, nobis iste officiis repellat animi
                adipisci ut ad perferendis iure rerum repudiandae, ea, cupiditate magnam? Eveniet optio itaque veniam
                autem?
                <FormSubscribe></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

PageSubscribe.defaultProps = {};
PageSubscribe.propTypes = {};
export default PageSubscribe;
