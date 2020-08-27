import styled from "styled-components";

const AvatarStyle = styled.div`
    display: block;
    .avatar {
        &__header {
            display: flex;
            flex-direction: column;
            width: 100%;

            &__title {
                color: #4a4a4a;
                display: flex;
                font-size: 24px;
                font-weight: bold;
                padding: 10px;
                text-transform: uppercase;
                > span {
                    display: flex;
                    width: 100%;
                }
            }

            &__avatar {
                align-items: center;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 50%;
                display: flex;
                height: 70px;
                justify-content: center;
                padding: 2px;
                position: relative;
                width: 70px;
                > img {
                    display: flex;
                    width: 100%;
                }
            }
        }
    }
`;
export default AvatarStyle;
