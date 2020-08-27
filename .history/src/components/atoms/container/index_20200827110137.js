import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    margin: 0 auto;
    padding: ${props => (props.noPadding ? 0 : "0 0")};
    width: 450px;
    @media (max-width: 550px) {
        width: 100%;
        padding: ;
    }
`;

Container.defaultProps = {
    noPading: false,
};

Container.propTypes = {
    noPading: PropTypes.bool,
};

export default Container;
