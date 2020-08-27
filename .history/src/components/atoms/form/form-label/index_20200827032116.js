import React from "react";
import PropTypes from "prop-types";
import FormInputStyle from "./index.style";

const FormLabel = props => {
    return <FormInputStyle {...props}></FormInputStyle>;
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
