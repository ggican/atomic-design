import React from "react";
import PropTypes from "prop-types";
import PageSubscribeStyle from "./index.style";

const PageSubscribe = props => {
    return (
        <PageSubscribeStyle>
            <Header {...props}></Header>
            <Container>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci illum itaque voluptatum similique,
                ipsa sequi corporis ut suscipit ipsum ratione est! Laborum tempore hic totam repellendus, quam doloribus
                obcaecati a.
            </Container>
            <Navbar onClick={() => {}}></Navbar>
        </PageSubscribeStyle>
    );
};

PageSubscribe.defaultProps = {};
PageSubscribe.propTypes = {};
export default PageSubscribe;
