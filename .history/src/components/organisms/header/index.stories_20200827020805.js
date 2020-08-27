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
export const Image = () => {
    return (
        <MemoryRouter>
            <Header image={dummyImage} type="circle" name="Example" />
        </MemoryRouter>
    );
};
