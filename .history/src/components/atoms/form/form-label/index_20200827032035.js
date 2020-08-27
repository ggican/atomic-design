import React from "react";
import PropTypes from "prop-types";
import FormInputStyle from "./index.style";

const FormInput = props => {
    return <FormInputStyle {...props}></FormInputStyle>;
};

FormInput.defaultProps = {
    type: "text",
    label: "",
    as: "input",
    placeholder: "input form",
    readOnly: false,
};

FormInput.propTypes = {
    type: PropTypes.oneOfType(["number", "text"]),
    as: PropTypes.oneOfType(["textarea", "input"]),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
};
export default FormInput;
