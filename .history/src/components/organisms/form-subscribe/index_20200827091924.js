import React from "react";
import PropTypes from "prop-types";
import FormSubscribeStyle from "./index.style";
import Form from "../../molecules/form";
import Button from "../../atoms/button";
import Text from "../../atoms/text";

const FormSubscribe = ({ onSubmitSubscribe }) => {
    return (
        <FormSubscribeStyle>
            <Text.Title fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero omnis eligendi eveniet velit ab
                et necessitatibus corrupti laborum reprehenderit dolorum? Magnam incidunt error ex libero dolor optio
                laboriosam ducimus?
            </Text.Title>
            <Text.Title fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero omnis eligendi eveniet velit ab
                et necessitatibus corrupti laborum reprehenderit dolorum? Magnam incidunt error ex libero dolor optio
                laboriosam ducimus?
            </Text.Title>
            <Form onSubmit={onSubmitSubscribe}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Input type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Input type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Button size="lg" color="primary" block type="submit">
                        Subscribe
                    </Button>
                </Form.Group>
            </Form>
        </FormSubscribeStyle>
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

export default FormSubscribe;
