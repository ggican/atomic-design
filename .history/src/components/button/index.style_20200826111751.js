import styled from "styled-components";

const ButtonStyle = styled.button`
    ${props => props.theme.button.color[props.color].variant.active}
    ${({ selected }) =>
        selected &&
        `
        ${props => props.theme.button.color[props.color].variant.active}
        svg{
            color:${props => props.theme.button.color[props.color].variant.active.color}
        }
    `}
`;

export default ButtonStyle;
