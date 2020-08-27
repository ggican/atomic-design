import React from "react";
import Avatar from "./index";
import dummyImage from "../../static/dumy-pokemon.png";

export default { title: "Components|Avatar|test", component: Avatar };

export const Default = () => {
    return <Avatar></Avatar>;
};
export const WithImage = () => {
    return <Avatar image={dummyImage}></Avatar>;
};

export const WithName = () => {
    return <Avatar name="Burbasur" image={dummyImage}></Avatar>;
};

export const Loading = () => {
    return <Avatar.Loading></Avatar.Loading>;
};
