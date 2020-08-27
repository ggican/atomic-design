import React from "react";
import { MemoryRouter } from "react-router";
import WithHeaderNavbar from "./index";

export default {
    title: "templates|With Header Navbar",
    component: WithHeaderNavbar,
    parameters: {
        viewport: { defaultViewport: "dekstop" },
    },
};

export const Default = () => {
    return (
        <MemoryRouter>
            <WithHeaderNavbar></WithHeaderNavbar>
        </MemoryRouter>
    );
};