import React from "react";
import Avatar from "./index";
import dummyImage from "../../static/dumy-pokemon.png";

export default { title: "Atoms|Avatar", component: Avatar };

export const Default = () => {
    return <Avatar></Avatar>;
};

export const WithImage = () => {
    return <Avatar image={dummyImage}></Avatar>;
};
export const Type = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Avatar type="circle" image={dummyImage}></Avatar>
            <Avatar type="box" image={dummyImage}></Avatar>
            <Avatar type="rounded" image={dummyImage}></Avatar>
        </div>
    );
};

export const WithName = () => {
    return <Avatar name="Burbasur" image={dummyImage}></Avatar>;
};
