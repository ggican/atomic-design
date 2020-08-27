import React from "react";
import { MemoryRouter } from "react-router";
import dummyImage from "../../../static/dumy-pokemon.png";
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
            <WithHeaderNavbar image={dummyImage} type="circle" name="Example"></WithHeaderNavbar>
        </MemoryRouter>
    );
};
