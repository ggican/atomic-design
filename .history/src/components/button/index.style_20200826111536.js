import styled from "styled-components";

const ButtonStyle = styled.button`
    align-items: center;
    border: 1px solid;
    cursor: pointer;
    display: ${props => (props.block ? "flex" : "inline-flex")};
    line-height: 0.1em;
    outline: none;
    position: relative;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    ${({ active }) =>
        active &&
        `
        ${props => props.theme.button.color[props.color].variant.active}
        svg{
            color:${props => props.theme.button.color[props.color].variant.active.color}
        }
    `}
`;

export default ButtonStyle;
