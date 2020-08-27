import styled from "styled-components";

const AvatarStyle = styled.div`
    display: inline-block;
    .avatar {
        align-items: center;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: ${props => props.theme.avatar.type[props.type]};
        display: flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2px;
        position: relative;
        width: 100%;

        ${props => props.theme.avatar.size[props.size]}
        ${({ active }) =>
            full &&
            `
            width:100%;
            height:auto;
        `}
        > img {
            background: #fff;
            border-radius: ${props => props.theme.avatar.type[props.type]};
            display: block;
            height: 100%;
            object-fit: contain;
            padding: 2px;
            width: 100%;
            width: 100%;
        }
    }
`;
export default AvatarStyle;
