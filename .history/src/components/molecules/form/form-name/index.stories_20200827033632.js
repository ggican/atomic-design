import React from "react";
import Form from "./index";

export default { title: "Molecules|AvatarHeader", component: AvatarHeader };

export const Default = () => {
    return (
        <Form>
            <Form.Label>Label</Form.Label>
        </Form>
    );
};
export const Image = () => {
    return <AvatarHeader name="Button Example" image={dummyImage} type="circle"></AvatarHeader>;
};
