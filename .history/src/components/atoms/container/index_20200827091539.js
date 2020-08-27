import styled from "styled-components";
// import PropTypes from "prop-types";

const Container = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    width: 450px;
    ${props => (props.noPadding ? 0 : "20px 15px 10px 15px")}
`;

Container.defaultProps = {};

Container.propTypes = {};

export default Container;
