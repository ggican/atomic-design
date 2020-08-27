import React from "react";
import Avatar from "./index";
import dummyImage from "../../../static/dumy-pokemon.png";

export default { title: "Atoms|Avatar", component: Avatar };

export const Default = () => {
    return (
        <Container>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus provident in numquam voluptatem sequi
            quas ipsa iure nulla placeat amet explicabo, cumque veniam minima nostrum sapiente, iusto rem illum quis?
        </Container>
    );
};

export const WithImage = () => {
    return <Avatar image={dummyImage}></Avatar>;
};
export const Size = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Avatar size="sm" image={dummyImage}></Avatar>
            <Avatar size="md" image={dummyImage}></Avatar>
            <Avatar size="lg" image={dummyImage}></Avatar>
        </div>
    );
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
