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
export const AvatarWithAbilities = () => {
    return (
        <Avatar
            name="Burbasur"
            abilities={[
                {
                    ability: {
                        name: "chlorophyll",
                        url: "https://pokeapi.co/api/v2/ability/34/",
                    },
                    is_hidden: true,
                    slot: 3,
                },
                {
                    ability: {
                        name: "overgrow",
                        url: "https://pokeapi.co/api/v2/ability/65/",
                    },
                    is_hidden: false,
                    slot: 1,
                },
            ]}
            image={dummyImage}
        ></Avatar>
    );
};
export const AvatarLoading = () => {
    return <Avatar.Loading></Avatar.Loading>;
};
