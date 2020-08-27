import React from "react";
import { MemoryRouter } from "react-router";
import dummyImage from "../../../static/dumy-pokemon.png";

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
            <PageHome image={dummyImage} type="circle" name="Example"></PageHome>
        </MemoryRouter>
    );
};
