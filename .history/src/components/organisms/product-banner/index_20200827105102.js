import React from "react";
import PropTypes from "prop-types";
import ProductBannerStyle from "./index.style";
import Card from "../../atoms/card";
import Text from "../../atoms/text";
import Avatar from "../../atoms/avatar";
import Grid from "../../atoms/grid";
import image from "../../../static/image/dummy-square.jpg";

const ProductBanner = () => {
    return (
        <ProductBannerStyle>
            <Card randomBackground>
                <Grid justify="center">
                    <Grid.Col lg={12} sm={12} xs={12} md={12}>
                        <Text.Two align="center">Golden Paddy</Text.Two>
                    </Grid.Col>
                    <Grid.Col className="center" lg={12} sm={12} xs={12} md={12}>
                        <Avatar image={image} full></Avatar>
                    </Grid.Col>
                </Grid>
            </Card>
        </ProductBannerStyle>
    );
};
ProductBanner.defaultProps = {
    onSubmitSubscribe: () => {},
};
ProductBanner.propTypes = {
    /**
       `onSubmitSubscribe` for use submit in components onSubmitSubscribe
       */
    onSubmitSubscribe: PropTypes.func,
};

export default ProductBanner;
