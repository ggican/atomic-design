import React from "react";
import PropTypes from "prop-types";
import PageHomeStyle from "./index.style";
import Header from "../../organisms/header";
import Navbar from "../../molecules/navbar";
import Grid from "../../atoms/grid";
import HeroBanner from "../../organisms/hero-banner";
import ProductBanner from "../../organisms/product-banner";
import Container from "../../atoms/container";
import image from "../../../static/image/dummy-square.jpg";

const PageHome = props => {
    return (
        <PageHomeStyle>
            <Header {...props}></Header>
            <Container>
                <Grid>
                    <Grid.Col lg={12} sm={12} xs={12} md={12}>
                        <HeroBanner align={center} image={image}></HeroBanner>
                    </Grid.Col>
                </Grid>
                <Grid.Col lg={6} sm={12} xs={12} md={6}>
                    <Grid>
                        <Grid.Col lg={6} sm={12} xs={12} md={6}>
                            <ProductBanner></ProductBanner>
                        </Grid.Col>
                        <Grid.Col lg={6} sm={12} xs={12} md={6}>
                            <ProductBanner></ProductBanner>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid>
                    <Grid.Col lg={12} sm={12} xs={12} md={12}>
                        <HeroBanner image={image}></HeroBanner>
                    </Grid.Col>
                </Grid>
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
