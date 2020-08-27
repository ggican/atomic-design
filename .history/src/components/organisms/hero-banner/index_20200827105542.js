import React from "react";
import PropTypes from "prop-types";
import HeroBannerStyle from "./index.style";
import Card from "../../atoms/card";
import Text from "../../atoms/text";
import Avatar from "../../atoms/avatar";
import Grid from "../../atoms/grid";
import ReadMore from "../../molecules/read-more";

const HeroBanner = ({ image }) => {
    return (
        <HeroBannerStyle>
            <Card>
                <Grid justify="center">
                    <Grid.Col className="center" lg={3} sm={3} xs={12} md={3}>
                        <Avatar type="circle" image={image} full></Avatar>
                    </Grid.Col>
                    <Grid.Col lg={9} sm={9} xs={12} md={9}>
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
};
HeroBanner.propTypes = {
    /**
       `onSubmitSubscribe` for use submit in components onSubmitSubscribe
       */
    image: PropTypes.string,
};

export default HeroBanner;
