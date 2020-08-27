import styled from "styled-components";

const HeaderStyle = styled.header`
    background: #fff;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 0.1rem;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    font-weight: normal;
    min-height: 100vh;

    z-index: 777;
    .header {
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        &-right {
            display: inline-flex;
        }
    }
`;

export default HeaderStyle;
