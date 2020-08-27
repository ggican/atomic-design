import React from "react";
import PropTypes from "prop-types";
import FormLabelStyle from "./index.style";

const FormGroup = ({ children }) => {
    return <FormLabelStyle>{children}</FormLabelStyle>;
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
