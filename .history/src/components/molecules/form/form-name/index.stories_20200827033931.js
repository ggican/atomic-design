import React from "react";
import Form from "./index";

export default { title: "Molecules|AvatarHeader", component: AvatarHeader };

export const Default = () => {
    return (
        <Form.Group>
            <Form.Label>Label</Form.Label>
            <Form.Input type="text" />
        </Form.Group>
    );
};
