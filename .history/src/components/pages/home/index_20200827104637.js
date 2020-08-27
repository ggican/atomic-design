import React from "react";
import PropTypes from "prop-types";
import PageHomeStyle from "./index.style";
import Header from "../../organisms/header";
import Navbar from "../../molecules/navbar";
import Grid from "../../atoms/grid";
import HeroBanner from "../../molecules/hero-banner";
import ProductBanner from "../../molecules/product-banner";
import Container from "../../atoms/container";

const PageHome = props => {
    return (
        <PageHomeStyle>
            <Header {...props}></Header>
            <Container>
                <Grid justify="center">
                    <Grid.Col lg={12} sm={12} xs={12} md={12}>
                        <HeroBanner></HeroBanner>
                    </Grid.Col>
                    <Grid.Col className="center" lg={6} sm={12} xs={12} md={6}></Grid.Col>
                </Grid>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci illum itaque voluptatum similique,
                ipsa sequi corporis ut suscipit ipsum ratione est! Laborum tempore hic totam repellendus, quam doloribus
                obcaecati a.
            </Container>

            <Navbar onClick={() => {}}></Navbar>
        </PageHomeStyle>
    );
};

PageHome.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
};
PageHome.propTypes = {
    /**
       `size` for use size in components avatar
       */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /**
       `type` for use type in components avatar
       */
    type: PropTypes.oneOf(["circle", "rounded", "box"]),
    /**
       `name` for use name in components
       */
    name: PropTypes.string,
    /**
       `image` for use name in components
       */
    image: PropTypes.string,
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};
export default PageHome;