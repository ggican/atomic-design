import React from "react";
import FormSubscribeStyle from "./index.style";
import Form from "../../molecules/form";
import Button from "../../atoms/button";
import Text from "../../atoms/text";

const FormSubscribe = () => {
    return (
        <FormSubscribeStyle>
            <Text.Title fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero omnis eligendi eveniet velit ab
                et necessitatibus corrupti laborum reprehenderit dolorum? Magnam incidunt error ex libero dolor optio
                laboriosam ducimus?
            </Text.Title>
            <Form>
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

export default FormSubscribe;
