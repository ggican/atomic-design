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

export const HeaderDefault = () => {
    return (
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
};
