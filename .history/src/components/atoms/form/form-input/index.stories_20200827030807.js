import React from "react";
import FormInput from "./index";

export default {
    title: "Atoms|Form|FormInput",
    component: FormInput,
};

export const InputText = () => {
    return <FormInput></FormInput>;
};

export const InputNumber = () => {
    return <FormInput type="number"></FormInput>;
};

export const InputNumberPlaceholder = () => {
    return <FormInput placeholder="Type Here" type="text"></FormInput>;
};

export const TextArea = () => {
    return <FormInput as="textarea" placeholder="Type Here" type="number"></FormInput>;
};
