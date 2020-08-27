import React from "react";
import PropTypes from "prop-types";
import FormLabelStyle from "./index.style";

const FormLabel = ({ children }) => {
    return <FormLabelStyle>{children}</FormLabelStyle>;
};

FormLabel.defaultProps = {
    children: false,
};

FormLabel.propTypes = {
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};
export default FormLabel;
