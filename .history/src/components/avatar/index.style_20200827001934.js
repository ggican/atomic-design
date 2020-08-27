import styled from "styled-components";

const AvatarStyle = styled.div`
    display: block;
    .avatar {
        &__header {
            display: flex;
            flex-direction: column;
            width: 100%;

            &__avatar {
                align-items: center;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                padding: 2px;
                position: relative;
                ${props => console.log(props.theme)}
                > img {
                    display: flex;
                    width: 100%;
                }
            }
        }
    }
`;
export default AvatarStyle;
