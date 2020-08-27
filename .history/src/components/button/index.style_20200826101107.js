import styled from "styled-components";

const ButtonStyle = styled.button`
    /* background: #fff;
    border: 1px solid transparent;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5; */
    border: 1px solid;
    display: ${props => (props.block ? "block" : "inline-block")};
    outline: none;
    position: relative;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    ${props => props.theme.button.color[props.color].variant.enabled}
    ${props => props.theme.button.size[props.size]}
    ${props => props.button.color[props.color].variant.enabled}
    &:disabled {
        ${props => props.button.color[props.color].variant.disabled}
    }
    &:active {
        ${props => props.button.color[props.color].variant.active}
    }
`;

export default ButtonStyle;
