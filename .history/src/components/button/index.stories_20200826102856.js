import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import Button from "./index";

export default { title: "Atoms|Button", component: Button };

export const Default = () => {
    return <Button>Button Example</Button>;
};

export const Color = () => {
    return (
        <div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button color="primary">Button Example</Button>
            </div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button color="secondary">Button Example</Button>
            </div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button color="link">Button Example</Button>
            </div>
        </div>
    );
};

export const Size = () => {
    return (
        <div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button size="sm">Button Example</Button>
            </div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button size="md">Button Example</Button>
            </div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button size="lg">Button Example</Button>
            </div>
        </div>
    );
};

export const WithIcon = () => {
    return (
        <div>
            <div style={{ width: "100%", display: "block", marginBottom: 10 }}>
                <Button icon={<div>lorem</div>} size="sm">
                    Button Example
                </Button>
            </div>
        </div>
    );
};
