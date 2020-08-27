import React from "react";
import PropTypes from "prop-types";
import HeroBannerStyle from "./index.style";
import Card from "../../atoms/card";
import Text from "../../atoms/text";
import Avatar from "../../atoms/avatar";
import Grid from "../../atoms/grid";
import ReadMore from "../../molecules/read-more";

const HeroBanner = ({ image, align }) => {
    return (
        <HeroBannerStyle>
            <Card>
                <Grid align={align} justify="center">
                    <Grid.Col className="center" lg={4} sm={4} xs={12} md={4}>
                        <Avatar type="circle" image={image} full></Avatar>
                    </Grid.Col>
                    <Grid.Col lg={8} sm={8} xs={12} md={8}>
                        <Text.One>Golden Paddy</Text.One>
                        <Text.Title>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur cumque
                            architecto aliquid at. Aliquid ipsa obcaecati nisi aperiam molestiae consectetur recusandae,
                            consequuntur corrupti ratione minus soluta pariatur quaerat provident.
                        </Text.Title>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col lg={12} sm={12} xs={12} md={12}>
                        <ReadMore onClick={() => {}} title="read more"></ReadMore>
                    </Grid.Col>
                </Grid>
            </Card>
        </HeroBannerStyle>
    );
};
HeroBanner.defaultProps = {
    image: () => {},
    align: "normal",
};
HeroBanner.propTypes = {
    /**
       `onSubmitSubscribe` for use submit in components onSubmitSubscribe
       */
    image: PropTypes.string,
    /**
       `onSubmitSubscribe` for use submit in components onSubmitSubscribe
       */
    align: PropTypes.oneOf(["center", "flex-end", "flex-start"]),
};

export default HeroBanner;
