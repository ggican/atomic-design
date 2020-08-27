import styled from "styled-components";

const NavbarStyle = styled.div`
    background: #fff;
    border-top: 1px solid #ddd;
    display: block;
    width: 100%;
    z-index: 1020;
    ${({ fixed }) =>
        fixed &&
        `
        position:fixed;
        bottom:0;
        left:0;
        right:0;
    `}
    .nav-bar {
        display: flex;
        justify-content: space-evenly;
        width: 450px;
    }
`;

export default NavbarStyle;
