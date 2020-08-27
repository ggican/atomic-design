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
            <WithHeaderNavbar image={dummyImage} type="circle" name="Example">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam voluptates nostrum eligendi
                dolore eius voluptas deserunt. Quam expedita ut impedit beatae nisi? Quo totam iusto saepe, architecto
                tenetur quibusdam?
            </WithHeaderNavbar>
        </MemoryRouter>
    );
};
