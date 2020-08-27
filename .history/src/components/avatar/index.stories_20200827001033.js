import React from "react";
import Avatar from "./index";
import dummyImage from "../../static/dumy-pokemon.png";

export default { title: "Components|Avatar", component: Avatar };

export const AvatarDefault = () => {
    return <Avatar></Avatar>;
};
export const AvatarWithImage = () => {
    return <Avatar image={dummyImage}></Avatar>;
};

export const AvatarWithName = () => {
    return <Avatar name="Burbasur" image={dummyImage}></Avatar>;
};

export const AvatarLoading = () => {
    return <Avatar.Loading></Avatar.Loading>;
};
