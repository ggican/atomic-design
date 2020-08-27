import React from "react";
import { MemoryRouter } from "react-router";

import Header from "./index";

export default {
    title: "organisms|Header",
    component: Header,
    parameters: {
        viewport: { defaultViewport: "dekstop" },
    },
};

export const Default = () => {
    return (
        <MemoryRouter>
            <Header type="circle" name="Example" />
        </MemoryRouter>
    );
};

export const Default = () => {
    return <AvatarHeader type="circle">Button Example</AvatarHeader>;
};
export const Image = () => {
    return <AvatarHeader name="Button Example" image={dummyImage} type="circle"></AvatarHeader>;
};
