import styled from "styled-components";

const FormInputStyle = styled.input`
    background-color: #f0f6f0;
    border: 0;
    border-radius: 5px;

    color: #848884;
    display: block;
    font-family: "Red Hat Display", sans-serif;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    font-weight: normal;
    letter-spacing: 0.07px;
    line-height: normal;
    outline: none;
    padding: 12px 17px;
    width: 100%;
    &:active {
        color: #ccd1cd;
    }
    &:disabled {
        background-color: #edebeb;
    }
`;

export default FormInputStyle;
