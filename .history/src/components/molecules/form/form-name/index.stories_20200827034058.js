import React from "react";
import Form from "./index";

export default { title: "Molecules|form", component: Form };

export const Default = () => {
    return (
        <Form.Group>
            <Form.Label>Label</Form.Label>
            lorem
            <Form.Input type="text" />
        </Form.Group>
    );
};
