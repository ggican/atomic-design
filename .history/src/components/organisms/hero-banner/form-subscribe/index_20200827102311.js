import React from "react";
import PropTypes from "prop-types";
// import FormSubscribeStyle from "./index.style";
import Card from "../../../atoms/card";
import Text from "../../../atoms/text";
import Avatar from "../../../atoms/avatar";
import Grid from "../../../atoms/grid";
import ReadMore from "../../../molecules/read-more";

const FormSubscribe = () => {
    return (
        <HeroBannerStyle>
            <Card>
                <Grid justify="center" imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
                    <Grid.Col className="center" lg={3} sm={3} xs={12} md={3}>
                        <Avatar size="lg"></Avatar>
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
                <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
                    <Grid.Col lg={12} sm={12} xs={12} md={12}>
                        <ReadMore onClick={() => {}} title="read more"></ReadMore>
                    </Grid.Col>
                </Grid>
            </Card>
        </HeroBannerStyle>
    );
};
FormSubscribe.defaultProps = {
    onSubmitSubscribe: () => {},
};
FormSubscribe.propTypes = {
    /**
       `onSubmitSubscribe` for use submit in components onSubmitSubscribe
       */
    onSubmitSubscribe: PropTypes.func,
};

export default FormSubscribe;
