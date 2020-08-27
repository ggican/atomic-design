import React from "react";
import Button from "./index";

export default { title: "Atoms|Button", component: Button };

export const Default = () => {
    return <Button>Button Example</Button>;
};

export const Size = () => {
    return (
        <div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button color="primary">Button Example</Button>
            </div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button color="secondary">Button Example</Button>
            </div>
        </div>
    );
};
