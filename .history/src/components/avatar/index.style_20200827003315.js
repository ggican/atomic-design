import styled from "styled-components";

const AvatarStyle = styled.div`
    display: block;
    .avatar {
        &__header {
            align-items: center;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 50%;
            display: flex;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2px;
            position: relative;
            width: 100%;

            ${props => props.theme.avatar.size[props.size]}
            > img {
                background: #fff;
                border-radius: 50%;
                display: block;
                height: 100%;
                width: 100%;
                width: 100%;
            }
            &__avatar {
            }
        }
    }
`;
export default AvatarStyle;
