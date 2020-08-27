import React from "react";
import Form from "../../molecules/form";
import Button from "../../atoms/button";

const FormSubscribe = () => {
    return (
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
    );
};

export default FormSubscribe;
