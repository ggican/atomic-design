import React from "react";
import PropTypes from "prop-types";
// import FormSubscribeStyle from "./index.style";
import Card from "../../../atoms/card";
import Avatar from "../../../atoms/avatar";
import Grid from "../../../atoms/grid";

const FormSubscribe = () => {
    return (
        <Card>
            <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
                <Grid.Col lg={3} sm={3} xs={12} md={3}>
                    <Avatar size="lg"></Avatar>
                </Grid.Col>
                <Grid.Col lg={9} sm={9} xs={12} md={9}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
            </Grid>
            <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
                <Grid.Col lg={3} sm={3} xs={12} md={3}>
                    <Avatar size="lg"></Avatar>
                </Grid.Col>
                <Grid.Col lg={9} sm={9} xs={12} md={9}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
            </Grid>
        </Card>
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
