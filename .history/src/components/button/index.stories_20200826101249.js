import React from "react";
import Button from "./index";

export default { title: "Atoms|Button", component: Button };

export const Default = () => {
    return <Button>Button Example</Button>;
};

export const Size = () => {
    return (
        <div>
            <div style={{ width: "100%", display: "block" }}>
                <Button>Button Example</Button>
            </div>
        </div>
    );
};
