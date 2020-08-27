import React from "react";
import Avatar from "./index";
import dummyImage from "../../static/dumy-pokemon.png";

export default { title: "Atoms|Avatar", component: Avatar };

export const Default = () => {
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla sequi amet sed corrupti exercitationem
            quo adipisci maxime, beatae quisquam tempora vero nam vel quas veniam odit, voluptatum et quibusdam.
        </div>
    );
    return <Avatar></Avatar>;
};
// export const WithImage = () => {
//     return <Avatar image={dummyImage}></Avatar>;
// };

// export const WithName = () => {
//     return <Avatar name="Burbasur" image={dummyImage}></Avatar>;
// };

// export const Loading = () => {
//     return <Avatar.Loading></Avatar.Loading>;
// };
