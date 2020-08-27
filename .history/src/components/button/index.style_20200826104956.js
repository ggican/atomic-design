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
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;

    ${props => props.theme.button.color[props.color].variant.enabled}
    ${props => props.theme.button.size[props.size]}
    &:active {
        ${props => props.theme.button.color[props.color].variant.active}
    }
    &:disabled {
        ${props => props.theme.button.color[props.color].variant.disabled || ""}
    }
    span {
        padding-right: 8px;
    }
    ${({ iconPosition }) =>
        iconPosition === "right" &&
        `
        flex-direction:row-reverse;
        span {
            margin-left: 8px;
        }
    `}
    ${({ iconPosition }) =>
        iconPosition === "top" &&
        `
        flex-direction: column;
        span {
            margin-bottom: 4px;
        }
    `}
    ${({ iconPosition }) =>
        iconPosition === "bottom" &&
        `
        flex-direction:row-reverse;
        span {
            margin-top: 4px;
        }
    `}
`;

export default ButtonStyle;
