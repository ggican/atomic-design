import styled from "styled-components";

const ButtonStyle = styled.button`
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
