import React from "react";
import Card from "./index";

export default { title: "Atoms|Card", component: Card };

export const Default = () => {
    return (
        <Card>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, sint amet sit eos deleniti at repellendus
            sed laborum mollitia tempora. Quo odit qui fugiat, ullam nostrum explicabo eum repudiandae ipsum.
        </Card>
    );
};
export const RandomBackground = () => {
    return (
        <Card randomBackground>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, sint amet sit eos deleniti at repellendus
            sed laborum mollitia tempora. Quo odit qui fugiat, ullam nostrum explicabo eum repudiandae ipsum.
        </Card>
    );
};
