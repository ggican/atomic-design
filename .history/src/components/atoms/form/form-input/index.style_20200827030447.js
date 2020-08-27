import styled from "styled-components";

const HeaderStyle = styled.input`
    background-color: #f0f6f0;
    color: #ccd1cd;
    display: block;
    width: 100%;
    &:active {
        color: #848884;
    }
    &:disabled {
        background-color: #edebeb;
    }
`;

export default HeaderStyle;
