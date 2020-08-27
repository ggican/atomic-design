import React from "react";
import PropTypes from "prop-types";
import FormInputStyle from "./index.style";

const FormLabel = props => {
    return <FormInputStyle {...props}></FormInputStyle>;
};

FormLabel.defaultProps = {
    type: "text",
    label: "",
    as: "input",
    placeholder: "input form",
    readOnly: false,
};

FormLabel.propTypes = {
    type: PropTypes.oneOfType(["number", "text"]),
    as: PropTypes.oneOfType(["textarea", "input"]),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};
export default FormLabel;
