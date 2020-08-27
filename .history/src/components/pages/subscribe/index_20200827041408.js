import React from "react";
import PropTypes from "prop-types";
import PageHomeStyle from "./index.style";
import Header from "../../organisms/header";
import Navbar from "../../molecules/navbar";
import Container from "../../atoms/container";

const PageSubscribe = props => {
    return (
        <PageHomeStyle>
            <Header {...props}></Header>
            <Container>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci illum itaque voluptatum similique,
                ipsa sequi corporis ut suscipit ipsum ratione est! Laborum tempore hic totam repellendus, quam doloribus
                obcaecati a.
            </Container>
            <Navbar onClick={() => {}}></Navbar>
        </PageHomeStyle>
    );
};

PageSubscribe.defaultProps = {};
PageSubscribe.propTypes = {};
export default PageSubscribe;
