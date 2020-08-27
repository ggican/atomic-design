import styled from "styled-components";

export default styled.div`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: ${props => (props.randomBackground ? "2px 2px 6px 0px #cecece" : "unset")};
    flex: 0 0 auto;
    font-size: 12px;
    margin: 10px 0;
    margin-bottom: 5px;
    padding: 15px;
    position: relative;
    width: 100%;

    &:first-child {
        margin-left: 10px;
    }
`;
