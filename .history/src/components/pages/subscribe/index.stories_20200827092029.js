import React from "react";
import { MemoryRouter } from "react-router";
import dummyImage from "../../../static/dumy-pokemon.png";
import PageSubscribe from "./index";

export default {
    title: "pages|Subscribe",
    component: PageSubscribe,
    parameters: {
        viewport: { defaultViewport: "dekstop" },
    },
};

export const Default = () => {
    return (
        <MemoryRouter>
            <PageSubscribe image={dummyImage} type="circle" name="Example"></PageSubscribe>
        </MemoryRouter>
    );
};
