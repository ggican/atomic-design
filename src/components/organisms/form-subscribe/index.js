import React from "react";
import PropTypes from "prop-types";
import FormSubscribeStyle from "./index.style";
import Form from "../../molecules/form";
import Button from "../../atoms/button";
import Text from "../../atoms/text";

const FormSubscribe = ({ onSubmitForm }) => {
    return (
        <FormSubscribeStyle>
            <Text.Title fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero omnis eligendi eveniet velit ab
                et necessitatibus corrupti laborum reprehenderit dolorum? Magnam incidunt error ex libero dolor optio
                laboriosam ducimus?
            </Text.Title>
            <Text.Title fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero omnis eligendi eveniet velit ab
                et necessitatibus corrupti
            </Text.Title>
            <Form onSubmitForm={onSubmitForm}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Input name="email" type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Input name="password" type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Button size="lg" color="primary" block type="submit">
                        Login
                    </Button>
                </Form.Group>
            </Form>
        </FormSubscribeStyle>
    );
};
FormSubscribe.defaultProps = {
    onSubmitForm: () => {},
};
FormSubscribe.propTypes = {
    /**
       `onSubmitSubscribe` for use submit in components onSubmitSubscribe
       */
    onSubmitForm: PropTypes.func,
};

export default FormSubscribe;
