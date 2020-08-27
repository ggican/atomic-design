import styled from "styled-components";

const FormInputStyle = styled.input`
    background-color: #f0f6f0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    color: #ccd1cd;
    display: block;
    display: block;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.07px;
    line-height: normal;
    padding: 4px 0;
    width: 100%;
    &:active {
        color: #848884;
    }
    &:disabled {
        background-color: #edebeb;
    }
`;

export default FormInputStyle;
