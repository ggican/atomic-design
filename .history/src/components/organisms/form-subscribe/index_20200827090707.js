import React from "react";
import FormSubscribeStyle from "./index.style";
import Form from "../../molecules/form";
import Button from "../../atoms/button";

const FormSubscribe = () => {
    return (
        <FormSubscribeStyle>
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
