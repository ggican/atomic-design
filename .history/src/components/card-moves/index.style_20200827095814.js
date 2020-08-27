import styled from "styled-components";

export default styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: ${props => (props.randomBackground ? "2px 2px 6px 0px #cecece" : "unset")};
    flex: 0 0 auto;
    font-size: 12px;
    margin-bottom: 5px;
    margin-right: 10px;
    padding: 15px 10px 15px 10px;
    position: relative;
    width: ${props => props.width || 70}%;

    &:first-child {
        margin-left: 10px;
    }
`;
