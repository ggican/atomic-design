import React from "react";
import PropTypes from "prop-types";
import PageSubscribeStyle from "./index.style";
import Container from "../../atoms/container";
import Text from "../../atoms/text";
import Logo from "../../molecules/logo";
import FormSubscribe from "../../organisms/form-subscribe";

const PageSubscribe = props => {
    return (
        <PageSubscribeStyle>
            <Container>
                <Logo size="lg" name="Impact Tera" type="circle"></Logo>
                <Text.SubTitleOne>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores quis dolor, fugiat
                    cupiditate harum doloremque veniam. Inventore, sint unde, aliquam enim eaque perspiciatis tempora
                    ipsum delectus laborum minus eius.
                </Text.SubTitleOne>
                <FormSubscribe></FormSubscribe>
            </Container>
        </PageSubscribeStyle>
    );
};

PageSubscribe.defaultProps = {};
PageSubscribe.propTypes = {};
export default PageSubscribe;
