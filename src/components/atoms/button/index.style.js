import styled from "styled-components";

const ButtonStyle = styled.button`
    align-items: center;
    border: 1px solid;
    cursor: pointer;
    display: ${props => (props.block ? "flex" : "inline-flex")};
    justify-content: center;
    line-height: 0.8em;
    outline: none;
    position: relative;
    text-align:center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: ${props => (props.block ? "100%" : "auto")};
    ${props => props.theme.button.color[props.color].variant.enabled}
    ${props => props.theme.button.size[props.size]}
    
    span{
        margin-right:8px;
    }
    svg{
        color:${props => props.theme.button.color[props.color].variant.enabled.color}
    }
    &:active {
        ${props => props.theme.button.color[props.color].variant.active}
        svg{
            color:${props => props.theme.button.color[props.color].variant.active.color}
        }

    }
    &:disabled {
        ${props => props.theme.button.color[props.color].variant.disabled || ""}
    }
    
    ${({ iconPosition }) =>
        iconPosition === "right" &&
        `
        flex-direction:row-reverse;
        span {
            margin-left: 8px;
            margin-right: 0;
        }
    `}
    ${({ iconPosition }) =>
        iconPosition === "top" &&
        `
        flex-direction: column;
        span {
            margin-bottom: 10px;
            margin-right: 0;
        }
        font-size:10px;
    `}
    ${({ iconPosition }) =>
        iconPosition === "bottom" &&
        `
        flex-direction:column-reverse;
        span {
            margin-top: 10px;
            margin-right: 0;
        }
        font-size:10px;
    `}
     
    ${({ selected }) =>
        selected &&
        `
        svg{
            color:white
        }
    `}
    
    ${props => {
        return props.selected && props.theme.button.color[props.color].variant.active;
    }}
    
    ${({ box }) =>
        box &&
        `
        border-radius: 0!important;
    `}
    ${({ noText }) =>
        !noText &&
        `
        span {
            margin:0!important;
        }
    `}
`;

export default ButtonStyle;
