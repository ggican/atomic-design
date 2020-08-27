import React from "react";
import FormInput from "./index";

export default {
    title: "Atoms|Form|FormInput",
    component: FormInput,
};

export const Default = () => {
    return <FormInput></FormInput>;
};
export const Label = () => {
    return <FormInput label="With Label" type="number"></FormInput>;
};
export const Number = () => {
    return <FormInput label="With Label" type="number"></FormInput>;
};

export const Placeholder = () => {
    return <FormInput label="With Placeholder" placeholder="Type Here" type="text"></FormInput>;
};

export const TextArea = () => {
    return <FormInput label="Text Area" as="textarea" placeholder="Type Here" type="number"></FormInput>;
};
