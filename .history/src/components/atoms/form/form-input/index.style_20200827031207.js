import styled from "styled-components";

const FormInputStyle = styled.input`
    background-color: #f0f6f0;
    border: 0;
    font-weight:500;
    border-radius: 5px;
    font-family: Red Hat Display', sans-serif;
    color: #ccd1cd;
    display: block;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.07px;
    line-height: normal;
    outline: none;
    padding: 12px 17px;
    width: 100%;
    &:active {
        color: #848884;
    }
    &:disabled {
        background-color: #edebeb;
    }
`;

export default FormInputStyle;
