import React from "react";
import { MemoryRouter } from "react-router";
import dummyImage from "../../../static/dumy-pokemon.png";
import PageHome from "./index";

export default {
    title: "pages|Home",
    component: PageHome,
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
