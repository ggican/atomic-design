import styled from "styled-components";
// import PropTypes from "prop-types";

const Container = styled.div`
    margin: 0 auto;
    padding: ${props => (props.noPadding ? 0 : "0 20px")};
    width: 450px;
`;

Container.defaultProps = {
    noPading: false,,
};

Container.propTypes = {};

export default Container;
