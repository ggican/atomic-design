import React from "react";
import AvatarHeader from "./index";
import logo from "../../../static/logo.png";

export default { title: "Molecules|Logo", component: AvatarHeader };

export const Default = () => {
    return <AvatarHeader type="circle">Impact Tera</AvatarHeader>;
};
export const Image = () => {
    return <AvatarHeader size="lg" name="Impact Tera" image={logo} type="circle"></AvatarHeader>;
};
