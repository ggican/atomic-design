import styled from "styled-components";

const HeaderStyle = styled.header`
    background: #fff;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 0.1rem;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    font-weight: normal;
    /* left: 0;
    padding: 7px 0;
    position: fixed;
    right: 0;
    top: 0; */

    ${({ fixed }) =>
        fixed &&
        `
        position:fixed;
        position: fixed;
    right: 0;
    top: 0;
    `}
    z-index: 777;
    .header {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        &-right {
            display: inline-flex;
        }
    }
`;

export default HeaderStyle;
