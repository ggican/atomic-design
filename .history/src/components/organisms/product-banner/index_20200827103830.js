import React from "react";
import PropTypes from "prop-types";
import HeroBannerStyle from "./index.style";
import Card from "../../atoms/card";
import Text from "../../atoms/text";
import Avatar from "../../atoms/avatar";
import Grid from "../../atoms/grid";
import image from "../../../static/image/dummy-square.jpg";

const HeroBanner = () => {
    return (
        <HeroBannerStyle>
            <Card>
                <Grid justify="center">
                    <Grid.Col lg={12} sm={12} xs={12} md={12}>
                        <Text.One>Golden Paddy</Text.One>
                    </Grid.Col>
                    <Grid.Col className="center" lg={3} sm={3} xs={12} md={3}>
                        <Avatar image={image} full></Avatar>
                    </Grid.Col>
                </Grid>
            </Card>
        </HeroBannerStyle>
    );
};
HeroBanner.defaultProps = {
    onSubmitSubscribe: () => {},
};
HeroBanner.propTypes = {
    /**
       `onSubmitSubscribe` for use submit in components onSubmitSubscribe
       */
    onSubmitSubscribe: PropTypes.func,
};

export default HeroBanner;
