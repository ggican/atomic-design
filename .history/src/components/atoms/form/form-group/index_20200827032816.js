import React from "react";
import PropTypes from "prop-types";
import FormGroupStyle from "./index.style";

const FormGroup = ({ children }) => {
    return <FormGroupStyle>{children}</FormGroupStyle>;
};

FormGroup.defaultProps = {
    children: false,
};

FormGroup.propTypes = {
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};
export default FormGroup;
