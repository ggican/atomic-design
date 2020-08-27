import React from "react";
import AvatarHeader from "./index";
import dummyImage from "../../../static/dumy-pokemon.png";

export default { title: "Molecules|Logo", component: AvatarHeader };

export const Default = () => {
    return <AvatarHeader type="circle">Button Example</AvatarHeader>;
};
export const Image = () => {
    return <AvatarHeader name="Impact Tera" image={dummyImage} type="circle"></AvatarHeader>;
};
