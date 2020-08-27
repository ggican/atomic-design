import React from "react";
import { MemoryRouter } from "react-router";
import WithHeaderLogo from "./index";
import dummyImage from "../../../static/dumy-pokemon.png";

export default {
    title: "templates|With Header Logo",
    component: WithHeaderLogo,
    parameters: {
        viewport: { defaultViewport: "dekstop" },
    },
};

export const Default = () => {
    return (
        <MemoryRouter>
            <WithHeaderLogo image={dummyImage} type="circle" name="Example">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam voluptates nostrum eligendi
                dolore eius voluptas deserunt. Quam expedita ut impedit beatae nisi? Quo totam iusto saepe, architecto
                tenetur quibusdam?
            </WithHeaderLogo>
        </MemoryRouter>
    );
};
