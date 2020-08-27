import React from "react";
import AvatarHeader from "./index";
import dummyImage from "../../../static/dumy-pokemon.png";

export default { title: "Molecules|AvatarHeader", component: AvatarHeader };

export const Default = () => {
    return (
        <AvatarHeader image="dummyImage" type="circle">
            Button Example
        </AvatarHeader>
    );
};
