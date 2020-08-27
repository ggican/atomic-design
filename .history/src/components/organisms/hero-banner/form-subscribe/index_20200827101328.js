import React from "react";
import PropTypes from "prop-types";
// import FormSubscribeStyle from "./index.style";
import Card from "../../../atoms/card";
import Text from "../../../atoms/text";
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
                    <Text.One>Golden Paddy</Text.One>
                    << className="TItle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae aliquam laudantium totam quisquam eum corrupti repellendus! Iste maxime, quisquam asperiores voluptas reiciendis quam? Incidunt dolore dolores velit ullam impedit.</Text.TItle>
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
